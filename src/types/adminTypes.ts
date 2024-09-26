import { ComponentType } from "react";
import { IconType } from "react-icons/lib";

export interface IAuth {
  token: null | string;
  refreshToken: null | string;
}
export interface IAuthBody {
  email: string;
  password: string;
}
export interface ISideNavType extends IDropdownOptions {
  dropDownIcon?: ComponentType;
  children?: ISideNavType[];
}
export interface IAdminTable {
  _id: string;
  name: string;
  email: string;
  roles: string[];
}

export interface IAdminEditBody {
  id: string;
  request: {
    name: string;
    roles?: string[];
  }
}

export type IDropdownOptions = {
  key: string;
  label: string;
  icon?: IconType | ComponentType;
  url?: string;
  state?: string;
};

export interface IAdmins {
  message: string;
  data: IAdmin;
  pagination: {
    totalPages: number,
    totalRecords: number,
    currentPage: number,
    currentRecords: number,
  }
}

export interface IAdminCreate {
  email?: string;
  name: string;
};

export interface IAdmin {
  data: {
    _id: string;
    email: string;
    role: string;
    name: string;
  }
}

export interface IViewProfileResponse {
  _id: string;
  data: {
    email: string;
    name: string;
  }
  password: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  updatedBy: string;
  roles: IAdminRoles[];
}


export interface IPermission {
  module: string;
  permissions: ("GET" | "POST" | "DELETE" | "PUT" | "PATCH")[];
  _id: string;
}

export interface IAdminRoles {
  _id: string;
  name: string;
  description: string;
  permissions: IPermission[];
  __v: number;
}
