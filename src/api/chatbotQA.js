import chatbot from "./chatbot";

export const ChatbotQA = async (question, id) => {
  try {
    const res = await chatbot.post(`chatbot/question/${id}`, {
      question: String(question),
    });

    console.log(res);

    return res;
  } catch (err) {
    console.log(err);
  }
};
