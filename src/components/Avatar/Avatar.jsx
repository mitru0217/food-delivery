import { useState, useEffect } from 'react';
import { useAuthStore } from '../../zustand/store';
import AvatarThumbnail from '../AvatarThumbnail/AvatarThumbnail';

const Avatar = () => {
  const [avatarFromLocalStorage, setAvatarFromLocalStorage] = useState(null);
  const { user, setAvatar, loadingAvatar } = useAuthStore(state => ({
    user: state.user,
    setAvatar: state.setAvatar,
    loadingAvatar: state.loadingAvatar,
  }));

  const handleSubmit = event => {
    event.preventDefault();

    const fileInput = document.getElementById('avatar-upload');
    if (fileInput.files.length > 0) {
      const formData = new FormData();
      formData.append('avatar', fileInput.files[0]);
      setAvatar(formData); // Отправка файла на бэкенд для загрузки
    }
  };

  const handleFileChange = event => {
    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('avatar', file);
      setAvatar(formData);
    }
  };
  useEffect(() => {
    const avatarFromLocalStorage = localStorage.getItem('avatar');
    if (avatarFromLocalStorage) {
      // Если есть аватар в localStorage, сохраняем его во временное состояние
      setAvatarFromLocalStorage(avatarFromLocalStorage);
    }
  }, []);
  return (
    <>
      <label htmlFor="avatar-upload" style={{ cursor: 'pointer' }}>
        <AvatarThumbnail
          loading={loadingAvatar}
          user={user}
          avatarFromLocalStorage={avatarFromLocalStorage}
        />
        <form
          action="/avatar"
          method="patch"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <input
            id="avatar-upload"
            type="file"
            name="avatar"
            onChange={handleFileChange}
            accept="image/png, image/jpeg"
            style={{ display: 'none' }} // Скрываем элемент input
          />
          <button type="submit" style={{ display: 'none' }} />
        </form>
      </label>
    </>
  );
};

export default Avatar;
