import axios from 'axios';
import { toast } from 'react-toastify';

export function AxiosConfig() {

  // add axios config bases
  axios.defaults.baseURL = 'https://innova-starwars-api.herokuapp.com/';

  // check request
  axios.interceptors.request.use(request => {
    return request;
  }, error => {
    toast('Error request.', {
      type: 'error'
    });
    return Promise.reject(error);
  });

  // check response
  axios.interceptors.response.use(response => {
    return response;
  }, error => {
    toast('Request response error!', {
      type: 'warning'
    });
    return Promise.reject(error);
  });

  // return null ever
  return null;

}