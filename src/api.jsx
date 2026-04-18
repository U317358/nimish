

import axios from "axios";

const BASE_URL =  "https://nimishbac-5.onrender.com/api/";

export const submitForm = async (data) => {
  return axios.post(`${BASE_URL}submit/`, data);
};

