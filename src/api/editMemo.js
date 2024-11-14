import client from "./client";

export const editMemoApi = async (group_id, memo) => {
  try {
    const res = await client.put(`/checklists/${group_id}/memos`, null, {
      params: {
        memo: memo,
      },
    });

    console.log(res);

    return res;
  } catch (err) {
    console.log(err);
  }
};
