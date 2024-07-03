import LocalStorage from "@/utils/LocalStorage";
import baseService from "./BaseService";

class Authorization {
  api = "https://piseth.site/api/refreshToken";
  async refreshToken() {
    const res = await baseService.post(this.api, {
      refreshToken: localStorage.getItem("refreshToken"),
    });
    if (res?.errors || !res) {
      console.log("logout");
    } else {
      LocalStorage.setUserInfo(res);
    }
  }
}

export default new Authorization();
