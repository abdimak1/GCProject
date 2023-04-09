import axiosInstance from "../api/apihelper";
let api = axiosInstance;
export const login_user = async (username, password) => {
  try {
    const response = await api.post("/api/token/", {
      username: username,
      password: password,
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
