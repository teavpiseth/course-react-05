import axios from "axios";
import moment from "moment";
import Authorization from "./Authentication";
import LocalStorage from "@/utils/LocalStorage";

axios.interceptors.request.use(
  async function (config) {
    // console.log("congig", config.url);
    // console.log(
    //   "expiredIn",
    //   moment(localStorage.getItem("expiredIn")).format("YYYY-MM-DD HH:mm:ss")
    // );
    // if (
    //   config.url &&
    //   config.url.includes("login") === false &&
    //   config.url.includes("refreshToken") === false &&
    //   config.url.includes("category/get-list") === false &&
    //   config.url.includes("product/get-list") === false
    // ) {
    //   if (moment(localStorage.getItem("expiredIn")).isBefore(new Date())) {
    //     await Authorization.refreshToken();
    //     config.headers.authorization = `bearer ${LocalStorage.getAccessToken()}`;
    //   }
    // }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const config = error.config;
    if (error.response.status === 401 && !config?._isRetry) {
      await Authorization.refreshToken();
      if (
        config.headers.Authorization !==
        `bearer ${LocalStorage.getAccessToken()}`
      ) {
        config._isRetry = true;
        config.headers.authorization = `bearer ${LocalStorage.getAccessToken()}`;
        const response = await axios(config);
        return response;
      }
    }
    return Promise.reject(error);
  }
);
