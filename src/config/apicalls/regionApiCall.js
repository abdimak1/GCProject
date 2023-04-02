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

  export const create_region = async (val,phonen) => {
    console.log(val,phonen)
    // try {
    //   const response = await api.post("/region/create",{
    //     "fname":val.firstName,
    //     "Mname":val.middleName,
    //     "lname":val.lastName,
    //     "phone":phonen,
    //     "sex":val.sex,
    //     "profile":"pic",
    //     "region_name":val.region,
    //     "username":val.useName,
    //     "email":val.email,
    //     "password":`ufuyfuf8998@123`,
    //     "created_by":"1"
    //   });
    try {
      const response = await api.post("/region/create",{
        
        "region_name":"kmkmkmkmk",
        "username":"abdu",
        "email":"asljdbfa@gmail.com",
        "password":"mmsdjbaiubab@123djf",
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