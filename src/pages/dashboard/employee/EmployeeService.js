import baseService from "@/services/BaseService";

const ApiUrl = {
  getList: "https://piseth.site/api/employee/get-list?pageSize=5&page=1",
  getRoleList: "https://piseth.site/api/role/get-list?",
};

class EmployeeService {
  async getList(search = "") {
    const _search = search ? `&search=${search}` : "";
    const res = await baseService.get(ApiUrl.getList + _search);
    return res;
  }
  async getRoleList() {
    const res = await baseService.get(ApiUrl.getRoleList);
    return res;
  }
}

export default new EmployeeService();
