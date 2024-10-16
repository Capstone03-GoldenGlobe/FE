import client from "./client";

export const sendChecklistItem = async (id, gid, itemName) => {
  try {
    const res = await client.post(
      `/checklists/${id}/${gid}/items`,
      {},
      {
        params: {
          item_name: String(itemName), // 쿼리 파라미터 추가
        },
      }
    );

    console.log(res);
    return res;
  } catch (err) {
    console.error(err);
  }
};
