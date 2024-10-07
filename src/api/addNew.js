import client from "./client";

export const AddNew = async (country, city, startDate, endDate) => {
  try {
    const res = await client.post("/place/create", {
      country: String(country),
      city: String(city),
      startDate: String(startDate),
      endDate: String(endDate),
    });

    console.log(res);

    return res;
  } catch (err) {
    console.log(err);
  }
};
