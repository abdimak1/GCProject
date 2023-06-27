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
export const get_resources_tosell = async () => {
  try {
    const response = await api.get("/getresourcetosell/");
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

export const get_received_resources = async () => {
  try {
    const response = await api.get("/recievedresources/");
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

export const get_sent_resources = async () => {
  try {
    const response = await api.get("/sentresources/");
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
  console.log("idgf",val);
  try {
    const response = await api.post("/resources/create", {
      name: val.Name,
      type: val.type,
      amount: val.amount,
      price_perKilo: val.price_perkilo,
     
      
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

export const get_Transaction = async () => {
  try {
    const response = await api.get("/distrbutetransactions/");
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

export const distribute_resource = async (val) => {
  console.log(val);
  try {
    const response = await api.post("/distrbute/", {
      buyer: val.buyer,
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


export const accept_resource = async (resourceID) => {
  try {
    const response = await api.post("/recievedresources/accept/", {
      resource_id: resourceID
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

export const decline_resource = async (resourceID) => {
  try {
    const response = await api.post("/recievedresources/decline/", {
      resource_id: resourceID
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

export const cancel_resource = async (resourceID) => {
  try {
    const response = await api.post("/recievedresources/cancel/", {
      resource_id: resourceID
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