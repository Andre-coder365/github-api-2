import axios from 'axios';
const api = axios.create( {
    baseURL: 'https://api.github.com/',
});

export default api;

/* api.get('users/Andre-coder365') = ele retorna informações públicas desse usuário*/