import client from "./client";

export const isMemoCheckedApi = async (item_id) => {
  try {
    const res = await client.put(`/checklists/items/${item_id}/checked`);

    console.log(res);

    return res;
  } catch (err) {
    console.log(err);
  }
};
