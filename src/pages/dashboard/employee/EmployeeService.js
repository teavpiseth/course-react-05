import baseService from "@/services/BaseService";

const ApiUrl = {
  getList: "https://piseth.site/api/employee/get-list?pageSize=10&page=1",
  getRoleList: "https://piseth.site/api/role/get-list?",
  create: "https://piseth.site/api/employee/create",
  update: "https://piseth.site/api/employee/update",
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
  async create(data) {
    const res = await baseService.post(ApiUrl.create, data, {
      "Content-Type": "multipart/form-data",
    });
    return res;
  }

  async update(data) {
    const res = await baseService.put(ApiUrl.update, data, {
      "Content-Type": "multipart/form-data",
    });
    return res;
  }
}

export default new EmployeeService();
