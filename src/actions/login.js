import * as actionTypes from "../constants/login"

export const setToken = (payload) => ({
    type: actionTypes.LOGIN_SET_TOKEN,
    payload
});
