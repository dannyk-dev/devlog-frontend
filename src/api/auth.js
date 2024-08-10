import { axiosInstance } from ".";

export async function loginUser(data) {
  return await axiosInstance.post("/login", data).then((res) => res.data);
}

export const postFetcher = async (url, { arg }) => {
  // console.log(arg);
  const res = await axiosInstance.post(url, arg);

  // console.log(res);
  return res.data;
};

export async function registerUser(data) {
  return await axiosInstance.post("/register", data);
}

export async function logoutUser() {
  return await axiosInstance.post("/logout", {});
}
