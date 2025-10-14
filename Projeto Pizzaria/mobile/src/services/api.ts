import axios from "axios";

const api = axios.create({
    // baseURL: 'http://localhost:3333
    baseURL: 'http://192.168.88.8:3333',
    timeout: 10000,
})

export { api }; 