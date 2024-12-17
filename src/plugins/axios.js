import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:19003/api/';

axios.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    error => {
      return Promise.reject(error)
    },
  )