import axiosInstance from "../api/apihelper";
let api = axiosInstance;


export const get_all_farmers = async () => {
  try {
    const response = await api.get("farmers/");
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




// export const get_farmer = async (id) => {
//   try {
//     const response = await api.get(`/region/${id}`);
//     return { success: true, data: response.data };
//   } catch (err) {
//     if (err.response) {
//       console.log(err.response.data);
//       return { success: false, data: null, error: err.response.data.message };
//     } else {
//       console.log(`Error: ${err.message}`);
//     }
//   }
// };



export const create_farmer = async (val) => {
  console.log(val);
  try {
    const response = await api.post("/farmer/create", {
      fname: val.firstName,
      Mname: val.middleName,
      lname: val.lastName,
      phone: val.phone,
      sex: val.sex,
      land_size:val.land_size,
      land_map_id:val.land_map_id,
      profile: "453453453ertr",
      username: val.userName,
      email: "",
      password: val.passWord,
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

export const get_farmer = async (id) => {
  try {
    const response = await api.get(`/farmer/${id}`);
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
export const update_farmer = async (id,values) => {
 
  console.log("i will try to send this",values)
  try {
    const response = await api.put(`/farmer/${id}/update/`,values);
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