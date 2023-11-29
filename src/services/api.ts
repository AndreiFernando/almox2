import axios from 'axios';

export const api = axios.create({
    baseURL:  'http://10.24.96.22:3000' 
})