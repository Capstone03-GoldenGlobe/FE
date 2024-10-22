import client from "./client";

// 공유된 유저 조회
export const sharedUser = async (id) => {
  try {
    const res = await client.get(`/checklists/share/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
