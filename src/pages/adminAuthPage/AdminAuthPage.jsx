import FormSwitcher from '../../components/Forms/AdminAuth/FormSwitcher/FormSwitcher';
import useAdminStore from '../../zustand/adminStore';
import { Container } from '../adminKeyPage/AdminKeyPage.styled';

const AdminAuth = () => {
  return (
    <Container>
      <FormSwitcher />
    </Container>
  );
};

export default AdminAuth;
