import { Suspense, useState, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminContainer } from './AdminPage.styled';
import Dashboard from '../../components/Dashboard';
import useAdminStore from '../../zustand/adminStore';
import Loader from '../../components/Loader';

const AdminPage = () => {
  const [redirected, setRedirected] = useState(false);
  const { loading } = useAdminStore();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const isAuth = localStorage.getItem('isAuth');
    const isKeyAuthenticated = localStorage.getItem('isKeyAuthenticated');

    if (!isAuth && !loading && !redirected) {
      setRedirected(true);
      // Если пользователь не аутентифицирован, перенаправляем его на страницу входа
      navigate('/admin/auth');
    }

    if (isKeyAuthenticated && isAuth && !loading && !redirected) {
      setRedirected(false);
      useAdminStore.setState({ isAuth: true });
      navigate('/admin/dashboard');
    }
  }, [navigate, loading, redirected]);

  if (loading) {
    return <Loader />; // Пока идет загрузка, показываем лоадер
  }
  return (
    <Suspense fallback={<Loader />}>
      <AdminContainer>
        <Dashboard />
      </AdminContainer>
    </Suspense>
  );
};

export default AdminPage;
