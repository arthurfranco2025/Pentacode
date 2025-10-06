import axios from "axios";

const api = axios.create({
    // baseURL: 'http://localhost:3333
    baseURL: 'http://172.22.23.76:3333',
    timeout: 10000,
})

export { api }; 