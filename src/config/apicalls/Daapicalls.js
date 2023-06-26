import axiosInstance from "../api/apihelper";
let api = axiosInstance;



export const get_all_da= async () => {
  try {
    const response = await api.get("das/");
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




export const get_da = async (id) => {
  try {
    const response = await api.get(`/da/${id}`);
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



export const create_da = async (val) => {
  console.log(val);
  try {
    const response = await api.post("da/create", {
      fname: val.firstName,
      Mname: val.middleName,
      lname: val.lastName,
      phone: val.phone,
      sex: val.sex,
      profile: "453453453ertr",
      username: val.userName,
      email: val.email,
      password: val.passWord,
      specialization  : val.specialization ,
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


export const update_da = async (id,values) => {
 
  console.log("i will try to send this",values)
  try {
    const response = await api.put(`/da/${id}/update/`,values);
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