import { useEffect, useRef, useState } from "react";

import AddRolePermissionService from "../AddRolePermissionService";
import { useSearchParams } from "react-router-dom";

export function useAddRolePermission() {
  // const data = [];
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [listGroup, setListGroup] = useState([]);
  const [roleAccess, setRoleAccess] = useState([]);
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const result_role_access = await AddRolePermissionService.getRoleAccess(id);
    if (result_role_access) {
      setRoleAccess(result_role_access.list);
    }
    const res = await AddRolePermissionService.getListGroup();
    if (res) {
      setListGroup(res.listGroup);
      setList(res.list);
    }
  };

  function handleChecked(code) {
    const isHas = roleAccess.find(
      (item) => item.Code === code && !item.removeChecked
    )?.RoleId;
    if (isHas) {
      return true;
    }
    return false;
  }

  function onChangeItem(code, value) {
    let _roleAccess = roleAccess;
    let indexActiveItem = _roleAccess.findIndex((item) => item.Code === code);
    // _roleAccess[indexActiveItem].

    if (indexActiveItem >= 0 && value === false) {
      if (_roleAccess[indexActiveItem].addNew) {
        const newData = _roleAccess.filter((item) => item.Code !== code);
        return setRoleAccess([...newData]);
      }
      _roleAccess[indexActiveItem].removeChecked = true;
      return setRoleAccess([..._roleAccess]);
    } else if (indexActiveItem >= 0 && value === true) {
      _roleAccess[indexActiveItem].removeChecked = false;
      return setRoleAccess([..._roleAccess]);
    }
    let addNew = list?.find((item) => item.Code === code);
    if (addNew?.Code) {
      _roleAccess.push({
        ...addNew,
        RoleId: id,
        addNew: true,
      });
      setRoleAccess([..._roleAccess]);
    }
  }

  async function submitHandle() {
    const data = {
      newChecked: roleAccess.filter((item) => item.addNew),
      removeChecked: roleAccess.filter((item) => item.removeChecked),
      roleId: id,
    };
    const result = await AddRolePermissionService.update(data);
    if (result) {
      fetchData();
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return {
    listGroup,
    roleAccess,
    setRoleAccess,
    handleChecked,
    onChangeItem,
    list,
    id,
    name,
    submitHandle,
  };
}
