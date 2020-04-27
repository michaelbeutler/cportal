import * as actionTypes from "../constants/login"

const initialState = {
    isAuthenticated: false,
    user: { username: null, token: null }
}

const login = (state = initialState, { type, payload }) => {
    switch (type) {

        case actionTypes.LOGIN_SET_TOKEN:
            return Object.assign({}, state, {
                isAuthenticated: true,
                user: Object.assign({}, state.user, {
                    token: payload.token
                })
            })

        default:
            return state
    }
}

export default login;