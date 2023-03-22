import {axiosinstance as api} from "../api/apihelper"

export const fetchData = async () => {
    try {
      const response = await api.get("/users");
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