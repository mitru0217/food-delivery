import axios from 'axios';

export const API_URL = `http://localhost:5000/api`;
// export const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

api.interceptors.response.use(
  config => {
    return config;
  },
  async error => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(
          'http://localhost:5000/api/user/refresh',
          {
            withCredentials: true,
          }
        );
        localStorage.setItem('token', response.data.accessToken);
        return api.request(originalRequest);
      } catch (error) {
        console.log('Not Authorized');
      }
    }
    throw error;
  }
);
export default api;

//originalRequest._isRetry = true; в данном контексте устанавливает флаг _isRetry в объекте originalRequest.
//Этот флаг используется для контроля повторной попытки запроса. Когда Axios выполняет запрос и получает ответ с
//ошибкой 401, это может быть интерпретировано как необходимость обновления токена (или выполнение другой логики
//для повторной попытки запроса). Флаг _isRetry помогает предотвратить бесконечные циклы повторных запросов.

//Когда установлен флаг _isRetry в true, это служит сигналом для интерсептора (в данном случае), чтобы он знал,
//что запрос уже был попыткой повторения после получения ошибки 401. Это позволяет избежать бесконечной попытки
//повторения запроса, если что-то пошло не так при обновлении токена или в других случаях.
