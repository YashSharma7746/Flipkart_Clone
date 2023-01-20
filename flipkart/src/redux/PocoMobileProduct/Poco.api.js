import axios from "axios";
export const GetPocoProductApi = async () => {
  try {
    const response = await axios.get(
      `https://rune-veil-mantis.glitch.me/products`
    );
    return response.data.mobiles;
  } catch (er) {
    console.log(er);
  }
};
