import axiosInstance from "../api/apihelper";
let api = axiosInstance;
export const get_report = async () => {
  try {
    const response = await api.get("/reports/");
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

export const create_report = async (myformdata) => {
  
  try {
    const response = await api.post("/reports/create",myformdata);

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

// export const update_region = async (id,values) => {

//   console.log("i will try to send this",values)
//   try {
//     const response = await api.put(`/region/${id}/update/`,values);
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
