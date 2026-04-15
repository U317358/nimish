

import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

export const submitForm = async (data) => {
  return axios.post(`${BASE_URL}submit/`, data);
};

