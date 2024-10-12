import client from "./client";

export const Share = async (cellPhone, color, id) => {
  try {
    const res = await client.post(`/checklists/share/${id}`, {
      cellPhone: String(cellPhone),
      color: String(color),
    });

    console.log(res);

    return res;
  } catch (err) {
    console.log(err);
  }
};
