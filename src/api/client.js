import axios from "axios";

const client = axios.create();
client.defaults.baseURL = "/";

client.defaults.withCredentials = true;

//accessToken 저장
const token = localStorage.getItem("accessToken");
client.defaults.headers.common["Authorization"] = token ? `${token}` : null;

export default client;
