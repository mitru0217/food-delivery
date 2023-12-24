import apiAdmin from '../http/adminApi';

export default class AdminService {
  static async adminLogin(email, password) {
    return apiAdmin.post('/auth', { email, password, action: 'login' });
  }
  static async adminRegister(name, email, password) {
    return apiAdmin.post('/auth', {
      name,
      email,
      password,
      action: 'register',
    });
  }
  static async adminLogout() {
    return apiAdmin.post('/logout');
  }
  static async fetchUsers() {
    return apiAdmin.get('/users');
  }
}
