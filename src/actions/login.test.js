import * as actions from "./login"
import * as actionTypes from "../constants/login"

describe('actions for login', () => {

    test('should generate action for LOGIN_SET_TOKEN', () => {
        const payload = {token: "myRandomToken"};
        const expectedAction = {type: actionTypes.LOGIN_SET_TOKEN, payload};
        expect(actions.setToken(payload)).toEqual(expectedAction)
    })
    
})
