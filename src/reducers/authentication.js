const INITIAL_AUTH_STATE = {
    email: '',
    password: '',
    token: '',
    status: 'idle',
    error: null,
    isSignedIn: false,
};
  
const authReducer = (state = INITIAL_AUTH_STATE, action) => {
    switch (action.type) {
      case 'EMAIL_CHANGED':
        return { ...state, email: action.payload };
      case 'PASSWORD_CHANGED':
        return { ...state, password: action.payload };
      case 'auth/loginUserSuccess':
        return { ...state, token: action.payload, isSignedIn: true };
      case 'auth/loginUserFailure':
        return { ...state, status: 'failure', error: action.payload, isSignedIn: false };
      case 'auth/SignupUserSuccess':
        return { ...state, token: action.payload, isSignedIn: true };
      case 'auth/SignupUserFailure':
        return { ...state, status: 'failure', error: action.payload };
      case 'auth/logoutUserSuccess':
        return { ...state, token: '', isSignedIn: false };
      default:
        return state;
    }
};

export default authReducer;