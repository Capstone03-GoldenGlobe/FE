import client from "./client";

export const editItemApi = async (item_id, item_name) => {
  try {
    const res = await client.put(`/checklists/items/${item_id}/name`, null, {
      params: {
        item_name: item_name,
      },
    });

    console.log(res);

    return res;
  } catch (err) {
    console.log(err);
  }
};
