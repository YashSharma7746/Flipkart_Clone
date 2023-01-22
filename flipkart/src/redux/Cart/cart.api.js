// https://rune-veil-mantis.glitch.me/carts
import axios from "axios";

export const GetCartDataApi = async () => {
  try {
    const response = await axios.get(
      `https://thankful-loafers-hare.cyclic.app/cart`
    );
    return response.data;
  } catch (er) {
    console.log(er);
  }
};

export const DelCartItemApi = async (id) => {
  try {
    let response = await axios.delete(
      `https://thankful-loafers-hare.cyclic.app/cart/${id}`
    );
    return response;
  } catch (er) {
    console.log(er);
  }
};

export const AddToCartApi = async (el) => {
  try {
    let response = await axios.post(
      `https://thankful-loafers-hare.cyclic.app/cart`,
      { ...el }
    );
    return response.data;
  } catch (er) {
    console.log(er);
  }
};
