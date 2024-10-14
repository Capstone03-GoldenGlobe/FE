import client from "./client";
// 질문, 선택지 리스트 조회
export const getCheckListAll = async (id) => {
  try {
    const res = await client.get(`/checklists/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
