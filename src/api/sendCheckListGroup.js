import client from "./client";

export const sendChecklistGroup = async (groupName, id) => {
  try {
    const res = await client.post(
      `/checklists/${id}/groups`,
      {}, // POST 본문은 비워둠
      {
        params: {
          group_name: String(groupName), // 쿼리 파라미터 추가
        },
      }
    );

    console.log(res);
    return res;
  } catch (err) {
    console.error(err);
  }
};
