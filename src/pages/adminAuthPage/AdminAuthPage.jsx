import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormSwitcher from '../../components/Forms/AdminAuth/FormSwitcher/FormSwitcher';

import { Container } from '../adminKeyPage/AdminKeyPage.styled';

const AdminAuth = () => {
  const [redirected, setRedirected] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isKeyAuthenticated = localStorage.getItem('isKeyAuthenticated');
    if (!isKeyAuthenticated && !redirected) {
      setRedirected(true);
      navigate('/admin/key');
    }

    if (isKeyAuthenticated && !redirected) {
      navigate('/admin/auth');
    }
  }, [navigate, redirected]);
  return (
    <Container>
      <FormSwitcher />
    </Container>
  );
};

export default AdminAuth;
