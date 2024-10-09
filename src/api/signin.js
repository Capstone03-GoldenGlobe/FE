import client from "./client";

export const Signin = async (cellphone, password) => {
  try {
    const res = await client.post("/auth/signin", {
      cellphone: String(cellphone),
      password: String(password),
    });

    console.log(res);

    const token = res?.data.Authorization;
    localStorage.setItem("accessToken", token);
    localStorage.setItem("refreshToken", res.data.refreshToken);

    return res;
  } catch (err) {
    console.log(err);
  }
};
