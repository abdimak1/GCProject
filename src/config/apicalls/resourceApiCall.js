import axiosInstance from "../api/apihelper";
let api = axiosInstance;
export const get_resources = async () => {
  try {
    const response = await api.get("/resources/");
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

export const create_resource = async (val) => {
  console.log(val);
  try {
    const response = await api.post("resources/create", {
      name: val.Name,
      type: val.type,
      amount: val.amount,
      price_perKilo: val.price_perKilo,
     
      
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


export const transfer_resource = async (val) => {
  console.log(val);
  try {
    const response = await api.post("/transfer/", {
      to: val.to,
      resource_id: val.resource_id,
      amount:val.amount
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