import axios from "axios";

const API_URL = "http://localhost:3000/users";

export const apiLogin = (user) => {
    return axios.post(`${API_URL}/sign_in`, user);
};

export const apiSignup = (user) => {
    console.log("apiSignup: ", user);
    return axios.post(`${API_URL}`, user );
}
