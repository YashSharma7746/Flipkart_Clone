import axios from "axios";
export const GetActionFashionWomensApi = async () => {
  try {
    const response = await axios.get(
      `https://rune-veil-mantis.glitch.me/products`
    );
    return response.data.girls_fashion;
  } catch (er) {
    console.log(er);
  }
};
