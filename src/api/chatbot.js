import axios from "axios";

const chatbot = axios.create();
chatbot.defaults.baseURL = "http://3.36.229.235:5000/";

chatbot.defaults.withCredentials = true;

export default chatbot;
