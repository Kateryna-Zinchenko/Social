export const SET_AUTH_USER_DATA = 'SET-USER-DATA';

export const setAuthUserData = (userId, email, login) => ({type: SET_AUTH_USER_DATA, data:{userId, email, login}});
