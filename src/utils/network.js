import axios from "axios";

export const getApiResource = async (url) => {
  try {
    const response = await axios.get(url);

    if (response.status !== 200) {
      console.error("Could not fetch.", response.status);
      return false;
    }

    return response.data;
  } catch (error) {
    console.error("Could not fetch.", error.message);
    return false;
  }
};

export const makeConcurrentRequest = async (urls) => {
  try {
    const requests = urls.map((url) => axios.get(url));
    const responses = await Promise.all(requests);
    const data = responses.map((response) => response.data);

    return data;
  } catch (error) {
    console.error("Could not fetch.", error.message);
    return false;
  }
};
