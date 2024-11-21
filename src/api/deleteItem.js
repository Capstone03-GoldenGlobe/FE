import client from "./client";

export const DeleteItemApi = async (item_id) => {
  try {
    const res = await client.delete("checklists/items", {
      params: {
        item_id: Number(item_id),
      },
    });

    console.log(res);

    return res;
  } catch (err) {
    console.log(err);
  }
};
