import client from "./client";

export const getChatlog = async (id) => {
  try {
    const res = await client.get(`/chatbot/log/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
