import { Modal,} from "antd";
import { useEffect, useRef, useState } from "react";

import AddRolePermissionService from "../AddRolePermissionService";

export function useAddRolePermission() {
  // const data = [];
  const [listGroup, setListGroup] = useState([]);


  const fetchData = async () => {
    const res = await AddRolePermissionService.getListGroup();
    if(res){
      setListGroup(res.listGroup);
    }
    
  };
  useEffect(() => {
    fetchData();
  }, []);
  return {
    listGroup
  };
}
