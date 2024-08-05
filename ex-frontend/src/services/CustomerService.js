import axios from "axios";
import { getToken } from "./AuthService";


const BASE_REST_API_URL='http://localhost:8087/api/v1/customer/getAll'

axios.interceptors.request.use(function (config) {
    
    config.headers['Authorization'] = getToken();

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

const getAll =() => {
    
    return axios.get(BASE_REST_API_URL);
}
export default getAll   

{/*export const getAll =()=> axios.get(BASE_REST_API_URL);*/}