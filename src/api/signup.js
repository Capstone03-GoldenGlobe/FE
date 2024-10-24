import client from "./client";

export const SignupApi = async (
  name,
  birth,
  cellphone,
  password,
  nickname,
  profile,
  gender
) => {
  try {
    const res = await client.post("auth/signup", {
      name: String(name),
      birth: String(birth),
      cellphone: String(cellphone),
      password: String(password),
      nickname: String(nickname),
      profile: "",
      gender: String(gender),
    });

    console.log(res);

    return res;
  } catch (err) {
    console.log(err);
  }
};
