import baseService from "@/services/BaseService";

const ApiUrl = {
  getList: "https://piseth.site/api/employee/get-list?",
  getRoleList: "https://piseth.site/api/role/get-list?",
  create: "https://piseth.site/api/employee/create",
  update: "https://piseth.site/api/employee/update",
  delete: "https://piseth.site/api/employee/delete",
};

class EmployeeService {
  async getList(param) {
    // return console.log(param);
    const res = await baseService.get(ApiUrl.getList + param);
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
  async delete(id) {
    const res = await baseService.delete(ApiUrl.delete, { id });
    return res;
  }
}

export default new EmployeeService();
