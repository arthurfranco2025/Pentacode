import axios from "axios";

const api = axios.create({
    // baseURL: 'http://localhost:3333
    baseURL: 'http://10.54.173.46:3333',
    timeout: 10000,
})

export { api }; 