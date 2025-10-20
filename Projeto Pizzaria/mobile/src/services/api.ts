import axios from "axios";

const api = axios.create({
    // baseURL: 'http://localhost:3333
    baseURL: 'http://10.106.131.70:3333',
    timeout: 10000,
})

export { api }; 