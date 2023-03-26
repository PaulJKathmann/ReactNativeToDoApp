import { apiLogin } from "../api/authApi";

export const loginUser = ({email, password}) => async (dispatch) => {
    try {
        const response = await apiLogin(email, password);
        dispatch({ type: 'auth/loginUserSuccess', payload: response.data });
    } catch (error) {
        dispatch({ type: 'auth/loginUserFailure', payload: error.message });
    }
};