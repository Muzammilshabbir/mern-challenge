import axios from "axios";
import {authHeader} from "./auth-header";
// import { url } from "../../config/config";


class API {
    constructor(swapi = false) {
        let url = "http://localhost:5000/api"

        if (swapi) {
            url = "https://swapi.dev/api"
        }
        this.url = url;
        this.endpoints = {};
    }

    getAll(resourceURL, config = authHeader()) {
        return axios.get(`${this.url}/${resourceURL}`);
    }

    getOne(resourceURL, { id }, config = authHeader()) {
        return axios.get(`${this.url}/${resourceURL}/${id}`, { headers: config });
    }

    post(resourceURL, data, config = authHeader()) {
        return axios.post(`${this.url}/${resourceURL}`, data, { headers: config });
    }

}
axios.interceptors.response.use(
    (response) => {
        return Promise.resolve(response);
    },
    function (error) {
        if (401 === error.response.status) {
            localStorage.removeItem("_token");
            
        } else {
            return Promise.reject(error);
        }
    }
);

axios.interceptors.request.use(req => {
    const token = localStorage.getItem('_token')

    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }  
    return req;
}, error => {

    // Do something with request error
    return Promise.reject(error);
});
export default API;
