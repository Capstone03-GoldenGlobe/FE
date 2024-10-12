import client from "./client";

export const getPDFname = async (id) => {
  try {
    const res = await client.get(`/pdf/infos/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
