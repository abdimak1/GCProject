import axiosInstance from "../api/apihelper";
let api = axiosInstance;
export const get_all_kebelebusiness = async () => {
  try {
    const response = await api.get("/kebelebusinesses");
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


export const get_kebelebusiness = async (id) => {
  try {
    const response = await api.get(`/kbelebusiness/${id}`);
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

export const create_kebele_business = async (val) => {
  console.log(val);
  try {
    const response = await api.post("kbelebusiness/create",{
      fname:val.firstName,
      Mname:val.middleName,
      lname:val.lastName,
      phone:val.phone,
      sex:val.sex,
      profile:"pic",
      unique_name:val.unique_name,
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

export const update_kebelebusiness = async (id,values) => {
 
  console.log("i will try to send this",values)
  try {
    const response = await api.put(`/kbelebusiness/${id}/update/`,values);
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