import axios from "axios";
import { useQuery } from "react-query";

type UserProps = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

async function getUsersList(): Promise<UserProps[]> {
  const { data } = await axios.get("http://localhost:3000/api/users");

  const users = data.users.map((user: UserProps) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return users;
}

export function UseUsersList() {
  return useQuery("users", getUsersList);
}
