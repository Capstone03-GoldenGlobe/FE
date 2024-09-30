import client from "./client";

export const SignupApi = async (
  name,
  birth,
  cellphone,
  email,
  password,
  nickname,
  profile,
  gender
) => {
  try {
    const res = await client.post("/auth/signup", {
      name: String(name),
      email: String(email),
      password: String(password),
      birth: String(birth),
      cellphone: String(cellphone),
      nickname: String(nickname),
      profile: String(profile),
      gender: String(gender),
    });

    console.log(res);

    return res;
  } catch (err) {
    console.log(err);
  }
};
