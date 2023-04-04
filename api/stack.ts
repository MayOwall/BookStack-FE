import apiClient from "./apiClient";

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
