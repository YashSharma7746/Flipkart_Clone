import axios from "axios";
export const GetActionFashionMensApi = async () => {
  try {
    const response = await axios.get(
      `https://rune-veil-mantis.glitch.me/products`
    );
    console.log(response.data.mens_fashion)
    return response.data.mens_fashion;
  } catch (er) {
    console.log(er);
  }
};
