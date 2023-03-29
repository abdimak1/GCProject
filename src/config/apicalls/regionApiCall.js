import {axiosinstance as api} from "../api/apihelper"

export const get_all_regions = async () => {
    try {
      const response = await api.get("/regions");
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

  export const create_region = async () => {
    try {
      const response = await api.post("/region/create",{
        "fname":"abel",
        "Mname":"assefa",
        "lname":"dibaba",
        "phone":"0941134055",
        "sex":"male",
        "profile":"pic",
        "region_name":"dasenech",
        "username":"abdi",
        "email":"assegfa@gmail.com",
        "password":"afasdga@15g",
        "created_by":"1"
      });
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