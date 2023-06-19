import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './types';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const login = (username, password) => {
  return (dispatch) => {
    dispatch(loginRequest());

    // Simulating API call
    setTimeout(() => {
      if (username === 'admin' && password === 'password') {
        const user = { username: 'admin' };
        dispatch(loginSuccess(user));
      } else {
        const error = 'Invalid username or password';
        dispatch(loginFailure(error));
      }
    }, 2000);
  };
};