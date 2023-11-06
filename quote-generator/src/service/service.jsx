import axios from "axios";

const BASE_URL = "https://api.quotable.io";
export const quotes = async (tag) => {
  try {
    const respone = await axios.get(`${BASE_URL}/random?tags=${tag}`);
    return respone.data;
  } catch (error) {
    return error;
  }
};

export const tagsList = async () => {
  return await axios.get(BASE_URL + "/tags");
};

export const getQuoteById = async (id) => {
  try {
    const respone = await axios.get(`${BASE_URL}/quotes/${id}`);
    return respone.data;
  } catch (error) {
    return error;
  }
};
