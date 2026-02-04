 interface Role {
  id_role: number;
  name_py: string;
}

 interface User {
  id_user: number;
  name: string;
  surname: string;
  email: string;
  roles: Role[];
}

 interface LoginResponse {
  user: User;
  token: string;
}
