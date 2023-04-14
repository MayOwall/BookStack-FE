import apiClient from "./apiClient";
interface StackCreateBody {
  title: string;
  author: string;
  publisher: string;
  date: string;
  detail: string;
}

export const getStack = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return { error: "no token" };
  }
  const { data } = await apiClient.get("/stack", {
    headers: {
      authorization: token,
    },
  });

  return data;
};

export const postStackCreate = async (body: StackCreateBody) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return { error: "no token" };
  }
  const { data } = await apiClient.post("/stack/create", body, {
    headers: {
      authorization: token,
    },
  });

  return data;
};
