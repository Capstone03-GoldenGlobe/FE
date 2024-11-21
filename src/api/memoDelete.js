import client from "./client";

export const memoDeleteApi = async (memo_id) => {
  try {
    const res = await client.delete("checklists/memos", {
      params: {
        memo_id: Number(memo_id),
      },
    });

    console.log(res);

    return res;
  } catch (err) {
    console.log(err);
  }
};
