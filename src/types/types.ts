export interface Role {
  id_role: number;
  name_py: string;
}

export interface User {
  id_user: number;
  name: string;
  surname: string;
  email: string;
  roles: Role[];
}

export interface LoginResponse {
  user: User;
  token: string;
}
