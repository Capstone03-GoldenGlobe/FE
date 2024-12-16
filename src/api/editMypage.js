import client from "./client";

export const editMypageApi = async (name, nickname, cellphone, birth) => {
  try {
    const res = await client.put("/myPage/modifyProfile", {
      name: String(name),
      nickname: String(nickname),
      cellphone: String(cellphone),
      birth: String(birth),
    });

    console.log(res);

    return res;
  } catch (err) {
    console.log(err);
  }
};
