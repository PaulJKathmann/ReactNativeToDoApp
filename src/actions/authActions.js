import { apiLogin, apiSignup, apiLogout } from "../api/authApi";

export const loginUser = (user) => async (dispatch) => {
    try {
        const response = await apiLogin(user);
        console.log("login response", response.headers.authorization);
        dispatch({ type: 'auth/loginUserSuccess', payload: response.headers.authorization });
    } catch (error) {
        console.log("login error", error.message);
        dispatch({ type: 'auth/loginUserFailure', payload: error.message });
    }
};

export const signupUser = (user) => async (dispatch) => {
    console.log("signupUser: ", user);
    try {
        const response = await apiSignup(user);
        console.log("sign up response", response.headers.authorization);
        dispatch({ type: 'auth/signupUserSuccess', payload: response.headers.authorization });
    } catch (error) {
        console.log("sign up error", error.message);
        dispatch({ type: 'auth/signupUserFailure', payload: error.message });
    }
};

export const logoutUser = (token) => async (dispatch) => {
    try {
        console.log("logoutUser");
        const response = await apiLogout(token);
        dispatch({ type: 'auth/logoutUserSuccess', payload: response.data });
    } catch (error) {
        console.log("logout error", error.message);
        dispatch({ type: 'auth/logoutUserFailure', payload: error.message });
    }
}