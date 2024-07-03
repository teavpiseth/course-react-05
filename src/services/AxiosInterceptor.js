import axios from "axios";
import moment from "moment";
import Authorization from "./Authentication";
import LocalStorage from "@/utils/LocalStorage";

axios.interceptors.request.use(
  async function (config) {
    console.log("congig", config.url);
    if (
      config.url &&
      config.url.includes("login") === false &&
      config.url.includes("refreshToken") === false
    ) {
      if (moment(localStorage.getItem("expiredIn")).isBefore(new Date())) {
        await Authorization.refreshToken();
        config.headers.authorization = `bearer ${LocalStorage.getAccessToken()}`;
      }
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
