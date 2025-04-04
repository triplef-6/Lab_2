import axios from 'axios';

// Создаем экземпляр axios с базовым URL
const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
});

export default apiClient;
