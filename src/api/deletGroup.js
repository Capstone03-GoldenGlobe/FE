import client from "./client";

export const DeleteGroupApi = async (group_id) => {
  try {
    const res = await client.delete("checklists/groups", {
      params: {
        group_id: Number(group_id),
      },
    });

    console.log(res);

    return res;
  } catch (err) {
    console.log(err);
  }
};
