import apiClient from "./apiClient";

interface dataProps {
  [key: string]: string;
}
export const postSignup = async (signupData: dataProps) => {
  const { data } = await apiClient.post("/signup", signupData);

  return data;
};

export const postSignin = async (signinData: dataProps) => {
  const { data } = await apiClient.post("/signin", signinData);

  return data;
};
