import host from './index';

export default class AdminApi {
  static async adminLogin(email, password) {
    return host.post('/admin/auth', { email, password, action: 'login' });
  }
  static async adminRegister(name, email, password) {
    return host.post('/admin/auth', {
      name,
      email,
      password,
      action: 'register',
    });
  }
  static async adminLogout() {
    return host.post('/admin/logout');
  }
  static async fetchUsers() {
    return host.get('/users');
  }
}
