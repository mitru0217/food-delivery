import axios from 'axios';
// export const API_URL = import.meta.env.VITE_API_URL;
export const API_URL = `http://localhost:5000/api`;

const host = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

host.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

host.interceptors.response.use(
  config => {
    return config;
  },
  async error => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry &&
      (originalRequest.url === 'http://localhost:5000/api/user/refresh' ||
        originalRequest.url === 'http://localhost:5000/api/admin/refresh')
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(originalRequest.url, {
          withCredentials: true,
        });
        localStorage.setItem('token', response.data.accessToken);
        return host.request(originalRequest);
      } catch (error) {
        console.log('Not Authorized');
      }
    }
    throw error;
  }
);
export default host;

//originalRequest._isRetry = true; в данном контексте устанавливает флаг _isRetry в объекте originalRequest.
//Этот флаг используется для контроля повторной попытки запроса. Когда Axios выполняет запрос и получает ответ с
//ошибкой 401, это может быть интерпретировано как необходимость обновления токена (или выполнение другой логики
//для повторной попытки запроса). Флаг _isRetry помогает предотвратить бесконечные циклы повторных запросов.

//Когда установлен флаг _isRetry в true, это служит сигналом для интерсептора (в данном случае), чтобы он знал,
//что запрос уже был попыткой повторения после получения ошибки 401. Это позволяет избежать бесконечной попытки
//повторения запроса, если что-то пошло не так при обновлении токена или в других случаях.
