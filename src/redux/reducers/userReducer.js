import {  SET_USER, SET_HANDLE_CHECK, HANDLE_CHECKED, SET_PROFILE_PICTURE, SET_LOGGED_IN_CHECK} from '../actionTypes'

const initialState = {
    user: '',
    handleAvailable: '',
    handleChecked: '',
    profilePicForUpload: '',
    checkIfLoggedIn: false
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return{
                ...state,
                user: action.payload
            }

        case SET_HANDLE_CHECK:
            return {
                ...state,
                handleAvailable: action.payload
            }

        case HANDLE_CHECKED:
            return {
                ...state,
                handleChecked: action.payload
            }
        case SET_PROFILE_PICTURE:
            return {
                ...state,
                profilePicForUpload: action.payload
            }
        case SET_LOGGED_IN_CHECK:
            return {
                ...state,
                checkIfLoggedIn: action.payload
            }

        default:
            return state
    }
}

export default userReducer