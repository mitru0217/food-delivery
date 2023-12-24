import { useState, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminContainer } from './AdminPage.styled';
import Dashboard from '../../components/DashBoardComponents/Dashboard/Dashboard';
import useAdminStore from '../../zustand/adminStore';
import Loader from '../../components/Loader';
const AdminPage = () => {
  const [redirected, setRedirected] = useState(false);
  const { loading } = useAdminStore();
  const navigate = useNavigate();

  // логикa проверки токена и статуса аутентификации
  const checkAuthentication = () => {
    const token = localStorage.getItem('token');
    const isAuth = localStorage.getItem('isAuth') === 'true';
    return { token, isAuth };
  };

  // useLayoutEffect(() => {
  //   const { token, isAuth } = checkAuthentication();

  //   if (!isAuth && !loading && !redirected) {
  //     setRedirected(true);
  //     // Если пользователь не аутентифицирован, перенаправляем его на страницу входа
  //     navigate('/admin/auth');
  //   }

  //   if (token && isAuth && !loading && !redirected) {
  //     setRedirected(true);
  //     useAdminStore.setState({ isAuth: true });
  //     navigate('/admin/auth');
  //   }
  // }, [navigate, loading, redirected]);

  if (loading) {
    return <Loader />; // Пока идет загрузка, показываем лоадер
  }
  return (
    <AdminContainer>
      <Dashboard />
    </AdminContainer>
  );
};

export default AdminPage;
