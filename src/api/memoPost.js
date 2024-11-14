import client from "./client";

export const memoPostApi = async (memo, id) => {
  try {
    const res = await client.post(
      `/checklists/${id}/memos`,
      {}, // POST 본문은 비워둠
      {
        params: {
          memo: String(memo), // 쿼리 파라미터 추가
        },
      }
    );

    console.log(res);
    return res;
  } catch (err) {
    console.error(err);
  }
};
