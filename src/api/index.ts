import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

interface IError {
  response: {status: null | number};
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://freetestapi.com/api/v1/',
});

const failedResponse = (error: IError) => {
  return Promise.reject(error);
};

const request = async (config: AxiosRequestConfig) => {
  return axiosInstance(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return failedResponse(error);
    });
};

export const getRequest = (route: string, params = {}) => {
  return request({method: 'get', url: route, params});
};
