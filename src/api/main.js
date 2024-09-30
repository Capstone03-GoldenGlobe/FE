import client from "./client";
// 질문, 선택지 리스트 조회
export const mainPage = async () => {
  try {
    const res = await client.get("/");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
