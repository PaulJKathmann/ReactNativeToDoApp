import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/login";

export const apiLogin = (email, password) => {
    axios.post(`${API_URL}`, {email, password});
};
