import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAnimation } from 'framer-motion';
import useAdminStore from '../../zustand/adminStore';
import {
  Key,
  Wrapper,
  Circle,
  Close,
  IconClose,
  KeyForm,
  KeyInput,
  KeySubmit,
} from './AdminKeyBox.styled';

// const ADMIN_KEY = import.meta.env.VITE_ADMIN_KEY;
const ADMIN_KEY = 'q9w8e7r6t5y';

const AdminKeyBox = () => {
  const [showInput, setShowInput] = useState(false);
  const [adminKey, setAdminKey] = useState('');
  const controls = useAnimation();
  const navigate = useNavigate();
  const { setIsKeyAuth } = useAdminStore();

  const handleKeyClick = async () => {
    await controls.start({ opacity: 0 });
    setShowInput(true);
  };

  const handleCloseClick = async () => {
    await controls.start({ opacity: 1, x: 0 });
    setShowInput(false);
  };

  const handleKeySubmit = e => {
    e.preventDefault();
    if (adminKey === ADMIN_KEY) {
      // Если ключ совпадает, переход на страницу регистрации
      navigate('/admin/auth');
      setIsKeyAuth(true);
    } else {
      // Если ключ не совпадает, можете добавить сообщение об ошибке или другую логику
      alert('Неверный ключ');
    }
  };
  const handleInputChange = event => {
    setAdminKey(event.target.value);
  };

  return (
    <Wrapper>
      {!showInput ? (
        <Circle animate={controls}>
          <Key size={50} onClick={handleKeyClick} />
        </Circle>
      ) : (
        <div>
          <Close onClick={handleCloseClick}>
            <IconClose size={25} />
          </Close>
          <KeyForm
            onSubmit={handleKeySubmit}
            initial={{ x: '-50%', opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', duration: 1.2 }}
          >
            <KeyInput
              type="password"
              name="admin-key"
              value={adminKey}
              placeholder="Enter Admin Key"
              onChange={handleInputChange}
            />
            <KeySubmit type="submit">Submit</KeySubmit>
          </KeyForm>
        </div>
      )}
    </Wrapper>
  );
};

export default AdminKeyBox;
