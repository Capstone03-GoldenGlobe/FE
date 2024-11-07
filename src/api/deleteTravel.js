import client from "./client";

export const deleteTravel = async (id) => {
  try {
    const res = await client.delete(`/place/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
