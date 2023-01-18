// https://rune-veil-mantis.glitch.me/carts
import axios from "axios";

export const GetCartDataApi = async () => {
  try {
    const response = await axios.get(
      `https://rune-veil-mantis.glitch.me/carts`
    );
    return response.data;
  } catch (er) {
    console.log(er);
  }
};

export const DelCartItemApi = async (id) => {
  try {
    let response = await axios.delete(
      `https://rune-veil-mantis.glitch.me/carts/${id}`
    );
    return response;
  } catch (er) {
    console.log(er);
  }
};

export const AddToCartApi = async (el) => {
  try {
    let response = await axios.post(
      `https://rune-veil-mantis.glitch.me/carts`,
      { ...el }
    );
    return response.data;
  } catch (er) {
    console.log(er);
  }
};
