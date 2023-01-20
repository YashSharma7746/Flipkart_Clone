import axios from "axios";
export const GetActionToyProductApi = async () => {
  try {
    const response = await axios.get(
      `https://rune-veil-mantis.glitch.me/products`
    );
    return response.data.actions;
  } catch (er) {
    console.log(er);
  }
};
