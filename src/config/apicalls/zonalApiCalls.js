import axiosInstance from "../api/apihelper";
let api = axiosInstance;
export const get_all_zones = async () => {
  try {
    const response = await api.get("/zones");
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


export const get_zone = async (id) => {
  try {
    const response = await api.get(`/zone/${id}`);
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


export const create_zone = async (val) => {
  console.log(val);
  try {
    const response = await api.post("/zone/create",{
      fname:val.firstName,
      Mname:val.middleName,
      lname:val.lastName,
      phone:val.phone,
      sex:val.sex,
      profile:"pic",
      Zone_name:val.zone,
      username:val.userName,
      email:val.email,
      password:val.passWord,
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

export const update_zone = async (id,values) => {
 
  console.log("i will try to send this",values)
  try {
    const response = await api.put(`/zone/${id}/update/`,values);
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