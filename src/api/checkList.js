import client from "./client";
// 질문, 선택지 리스트 조회
export const getCheckListAll = async () => {
  try {
    const res = await client.get("/checklists/3");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
