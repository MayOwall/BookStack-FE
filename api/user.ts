import apiClient from "./apiClient";

export const postSignup = async (signupData: any) => {
  const { data } = await apiClient.post("/signup", signupData);

  return data;
};
