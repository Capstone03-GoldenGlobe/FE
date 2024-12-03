import chatbot from "./chatbot";

export const getListRecommendation = async (id) => {
  try {
    const res = await chatbot.get(`/place/recommendation/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
