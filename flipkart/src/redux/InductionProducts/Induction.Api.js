import axios from "axios";
export const GetInductionProductApi = async () => {
  try {
    const response = await axios.get(
      `https://rune-veil-mantis.glitch.me/products`
    );
    return response.data.induction;
  } catch (er) {
    console.log(er);
  }
};
