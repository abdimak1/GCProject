import axiosInstance from "../api/apihelper";
let api = axiosInstance;
export const get_barData = async () => {
  try {
    const response = await api.get("/bardata/");
    return { success: true, data: response.data };
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      return { success: false, data: null, error: err.response.data.message };
    } else {
      console.log(`Error: ${err.message}`);
    }
  }
};