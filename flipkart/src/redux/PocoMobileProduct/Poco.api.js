import axios from "axios";
export const GetPocoProductApi = async () => {
  try {
    const response = await axios.get(
      `https://thankful-loafers-hare.cyclic.app/mobiles`
    );
    return response.data;
  } catch (er) {
    console.log(er);
  }
};
