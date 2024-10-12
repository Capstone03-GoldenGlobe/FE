import chatbot from "./chatbot";

export const ChatbotQA = async (id, question) => {
  try {
    const res = await chatbot.post(`/question/${id}`, {
      question: String(question),
    });

    console.log(res);

    return res;
  } catch (err) {
    console.log(err);
  }
};
