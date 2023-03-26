const INITIAL_AUTH_STATE = {
    email: '',
    password: '',
    authentication_token: '',
    status: 'idle',
    spinner: false
};
  
const authReducer = (state = INITIAL_AUTH_STATE, action) => {
    switch (action.type) {
      case 'EMAIL_CHANGED':
        return { ...state, email: action.payload };
      case 'PASSWORD_CHANGED':
        return { ...state, password: action.payload };
      case 'auth/loginUserSuccess':
        return { ...state, ...action.payload, ...INITIAL_AUTH_STATE };
      case 'auth/loginUserFailure':
        return { ...state, errorFlag: true, password: '', spinner: false };
      case 'LOAD_SPINNER':
        return { ...state, spinner: true };
      default:
        return state;
    }
};

export default authReducer;