import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useUserStore } from '../../zustand/userStore';
import AvatarThumbnail from '../AvatarThumbnail/AvatarThumbnail';

const Avatar = ({ avatarUrl }) => {
  // const { updateUserAvatar, loadingAvatar, avatar, setAvatar } = useUserStore();
  const [avatarFromLocalStorage, setAvatarFromLocalStorage] = useState(null);
  const { updateUserAvatar, loadingAvatar } = useUserStore(state => ({
    user: state.user,
    updateUserAvatar: state.updateUserAvatar,
    loadingAvatar: state.loadingAvatar,
  }));

  const handleSubmit = event => {
    event.preventDefault();

    const fileInput = document.getElementById('avatar-upload');
    if (fileInput.files.length > 0) {
      const formData = new FormData();
      formData.append('avatar', fileInput.files[0]);
      updateUserAvatar(formData); // Отправка файла на бэкенд для загрузки
    }
  };

  const handleFileChange = event => {
    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('avatar', file);
      updateUserAvatar(formData);
    }
  };
  useEffect(() => {
    const avatarFromLocalStorage = localStorage.getItem('avatar');
    console.log(avatarFromLocalStorage);
    if (avatarFromLocalStorage) {
      // Если есть аватар в localStorage, сохраняем его во временное состояние
      setAvatarFromLocalStorage(avatarFromLocalStorage);
      // setAvatar(avatarFromLocalStorage);
    }
  }, []);

  return (
    <>
      <label htmlFor="avatar-upload" style={{ cursor: 'pointer' }}>
        <AvatarThumbnail
          loading={loadingAvatar}
          avatarUrl={avatarUrl}
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

Avatar.propTypes = {
  avatarUrl: PropTypes.string,
};

export default Avatar;

// useEffect(() => {
//   // Обновление avatarUrl, когда avatar меняется в хранилище
//   if (avatar) {
//     setAvatarFromLocalStorage(avatar);
//     // Обновляем avatarUrl в вашем компоненте
//     // Например:
//     // updateUserAvatar(avatar); // Предположим, у вас есть функция для обновления avatarUrl в компоненте
//   }
// }, [avatar]);
