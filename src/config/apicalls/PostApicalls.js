import axiosInstance from "../api/apihelper";
let api = axiosInstance;


export const get_all_post= async () => {
  try {
    const response = await api.get("posts/");
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



export const create_post = async (val) => {
  console.log(val);
  try {
    const response = await api.post("/farmer/create", {
        title: val.title,
        discription: val.discription,
        thumbnail: val.thumbnail,
      
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


