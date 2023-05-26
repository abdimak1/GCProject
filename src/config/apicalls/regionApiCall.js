import axiosInstance from "../api/apihelper";
let api = axiosInstance;
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

export const create_region = async (val) => {
  console.log(val);
  try {
    const response = await api.post("/region/create", {
      fname: val.firstName,
      Mname: val.middleName,
      lname: val.lastName,
      phone: val.phone,
      sex: val.sex,
      profile: "453453453ertr",
      region_name: val.region,
      username: val.userName,
      email: val.email,
      password: val.passWord,
    });
    // try {
    //   const response = await api.post("/region/create", {
    //     region_name: "kmkmkmkmk",
    //     username: "wawawa",
    //     email: "sdfadsfasdf@gmail.com",
    //     password: "mmsdjbaiubab@123djf",
    //     created_by: "1",
    //   });
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
