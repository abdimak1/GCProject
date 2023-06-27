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



export const create_post = async (formData) => {

  try {
    const response = await api.post("/posts/create", formData);

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

export const delete_post = async (id) => {
    try {
      const response = await api.delete(`/posts/${id}/delete`);
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

