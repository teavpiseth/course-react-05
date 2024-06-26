import baseService from "@/services/BaseService";

const ApiUrl = {
  login: "https://piseth.site/api/employee/login",
};

class LoginService {
  async login(data) {
    const res = await baseService.post(ApiUrl.login, data);
    return res;
  }
}

export default new LoginService();
