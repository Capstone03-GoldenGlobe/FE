import client from "./client";

export const getWeather = async (id) => {
  try {
    const res = await client.get(`/temp/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
