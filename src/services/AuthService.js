import apiUser from '../http/userApi';

export default class AuthService {
  static async login(email, password) {
    return apiUser.post('/', { email, password, action: 'login' });
  }

  static async register(name, email, password) {
    const response = await apiUser.post('/', {
      name,
      email,
      password,
      action: 'register',
    });
    console.log(response.data);
    return response.data;
  }
  static async logout() {
    return apiUser.post('/user/logout');
  }
}
