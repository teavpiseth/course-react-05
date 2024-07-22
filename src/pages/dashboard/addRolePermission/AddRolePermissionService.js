import baseService from "@/services/BaseService";

const ApiUrl = {
  getList: "role/get-list?",
  listGroup: "access-key/get-list/group?",
  create: "role/create",
  update: "role-access/update",
  delete: "role/delete",
  roleAccess: "role-access/get-list?roleId=",
  // role-access/get-list?roleId=25;
};

class AddRolePermissionService {
  async getRoleAccess(roleId) {
    const res = await baseService.get(ApiUrl.roleAccess + roleId);
    return res;
  }
  async getList(search) {
    // return console.log(param);
    const res = await baseService.get(ApiUrl.getList + "search=" + search);
    return res;
  }
  async getListGroup() {
    const res = await baseService.get(ApiUrl.listGroup);
    return res;
  }
  async create(data) {
    // return console.log(data);
    const res = await baseService.post(ApiUrl.create, data);
    return res;
  }

  async update(data) {
    const res = await baseService.post(ApiUrl.update, data);
    return res;
  }
  async delete(id) {
    const res = await baseService.delete(ApiUrl.delete, { id });
    return res;
  }
}

export default new AddRolePermissionService();
