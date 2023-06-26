import axiosInstance from "../api/apihelper";
let api = axiosInstance;


export const get_all_privatesector= async () => {
  try {
    const response = await api.get("privates/");
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




export const get_privatesector = async (id) => {
  try {
    const response = await api.get(`/private/${id}`);
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



export const create_privatesector = async (val) => {
  console.log(val);
  try {
    const response = await api.post("privates/create", {
      fname: "",
      Mname: "",
      lname: "",
      phone: val.phone,
      sex:"",
      profile: "453453453ertr",
      username: val.userName,
      email: val.email,
      password: val.passWord,
      tin_number: val.tin_number,
      organization_name:val.organization_name,
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


export const update_privatesector = async (id,values) => {
 
  console.log("i will try to send this",values)
  try {
    const response = await api.put(`/private/${id}/update/`,values);
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