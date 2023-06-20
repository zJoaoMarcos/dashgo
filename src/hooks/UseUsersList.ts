import { api } from "@/services/axios/api";
import { UseQueryOptions, UseQueryResult, useQuery } from "react-query";

type UserProps = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

type GetUsersResponse = {
  totalCount: number;
  users: UserProps[];
};

export async function getUsersList(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get("users", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

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

  return {
    users,
    totalCount,
  };
}

export function UseUsersList(page: number, options?: UseQueryOptions) {
  return useQuery(["users", page], () => getUsersList(page), {
    ...options,
    staleTime: 1000 * 60 * 60, // 1 h
  }) as UseQueryResult<GetUsersResponse, unknown>;
}
