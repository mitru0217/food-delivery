import api from '../http';

export default class AuthService {
  static async login(email, password) {
    return api.post('', { email, password, action: 'login' });
  }

  static async register(name, email, password) {
    return api.post('', { name, email, password, action: 'register' });
  }
  static async logout() {
    return api.post('/logout');
  }
}
