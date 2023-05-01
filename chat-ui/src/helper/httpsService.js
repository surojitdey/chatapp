import axios from "axios";
// import { ACCESS_TOKEN } from "../config/constants";
// import appService from "./appService";

let axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 60000,
});

class HTTPService {
  invokeApi = (request, callback) => {
    const config = {
      method: request.method,
      url: request.url,
      withCredentials: request?.withCredentials ?? false,
    };

    if (request.data !== undefined) {
      config.data = request.data;
    }

    if (request.params !== undefined) {
      config.params = request.params;
    }

    if (request.headers !== undefined) {
      config.headers = request.headers;
    } else {
      config.headers = {
        "Content-Type": "application/json",
      };
    }

    if (request.responseType) {
      config.responseType = request.responseType;
    }

    if (request?.isAuthenticated ?? false) {
      config.headers.Authorization = `Bearer `;
    }

    axiosInstance
      .request(config)
      .then((res) => {
        callback(true, res.data);
      })
      .catch((err) => {
        callback(false, err ? (err.response ? err.response.data : err) : err);
      });
  };

  invokeApiPromise = (request) => {
    const config = {
      method: request.method,
      url: request.url,
      withCredentials: request?.withCredentials ?? false,
    };

    if (request.data !== undefined) {
      config.data = request.data;
    }

    if (request.params !== undefined) {
      config.params = request.params;
    }

    if (request.headers !== undefined) {
      config.headers = request.headers;
    } else {
      config.headers = {
        "Content-Type": "application/json",
      };
    }

    if (request.responseType) {
      config.responseType = request.responseType;
    }

    if (request?.isAuthenticated ?? false) {
      config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Impob24xQGdtYWlsLmNvbSIsInJvbGUiOiJVc2VyIiwidGVuYW50SWQiOiJlMzg2ZWRmMSIsImlhdCI6MTY2NDI2ODEyNCwiZXhwIjoxNjY0Mjc0MTI0fQ.a2PEZJf8TyELiIeQo4XTlx4OiM9gMKn1sctOTbfMxns`;
    }

    return axiosInstance.request(config);
  };
}

const httpService = new HTTPService();
export default httpService;
