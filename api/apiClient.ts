import axios from "axios";

const BASE_URL = "https://bookstack-be.fly.dev";

// instance axios
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
});

// request interceptors
apiClient.interceptors.request.use(
  // 요청 전달이 되기 전에 수행되는 로직
  function async(config) {
    return config;
  },
  // 요청 오류가 있을 시 수행되는 로직
  function (error) {
    return Promise.reject(error);
  }
);

export default apiClient;
