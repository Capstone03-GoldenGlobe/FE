import client from "./client";

export const Logout = async () => {
  try {
    const res = await client.post("/auth/login");

    console.log(res);

    return res;
  } catch (err) {
    console.log(err);
  }
};
