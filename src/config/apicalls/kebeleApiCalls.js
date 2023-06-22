import axiosInstance from "../api/apihelper";
let api = axiosInstance;
export const get_all_kebeleadmin = async () => {
  try {
    const response = await api.get("/kebeleadmins");
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


export const get_kebeleadmin = async (id) => {
  try {
    const response = await api.get(`/kebeleadmin/${id}`);
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

export const create_kebele = async (val) => {
  console.log(val);
  try {
    const response = await api.post("kebeleadmin/create",{
      fname:val.firstName,
      Mname:val.middleName,
      lname:val.lastName,
      phone:val.phone,
      sex:val.sex,
      profile:"pic",
      kebele_name:val.kebele,
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

export const update_kebeleadmin = async (id,values) => {
 
  console.log("i will try to send this",values)
  try {
    const response = await api.put(`/kebeleadmin/${id}/update/`,values);
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