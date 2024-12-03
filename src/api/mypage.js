import client from "./client";

export const getMypage = async () => {
  try {
    const res = await client.get(`/myPage`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
