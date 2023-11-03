
import { useState } from 'react';
import { useAuthStore } from '../../zustand/store';
import { Thumb, Img, RemoveIcon, AvatarIcon } from './Avatar.styled';
const Avatar = () => {
  const { user, setAvatar, removeAvatar } = useAuthStore((state) => ({
    user: state.user,
    setAvatar: state.setAvatar,
    removeAvatar: state.removeAvatar
  }));
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveAvatar = () => {
    removeAvatar();
    setPreview(null);
  };
  return (
    <>
      <label htmlFor="avatar-upload" style={{ cursor: 'pointer' }}>
        {preview ? (
        <Thumb onClick={handleRemoveAvatar}>
        <Img src={preview} alt="Preview" />
        <RemoveIcon className="remove-icon" size={20} color="#ff0000" />
        </Thumb>
        
      ) : (
        <Thumb>
        <AvatarIcon />
        </Thumb>
        
      )}
        <input
          id="avatar-upload"
          type="file"
          onChange={handleFileChange}
          accept="image/png, image/jpeg"
          style={{ display: 'none' }} // Скрываем элемент input
        />
      </label>
    </>
  );
};

export default Avatar;
