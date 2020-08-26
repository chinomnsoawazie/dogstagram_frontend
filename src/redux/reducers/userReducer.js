import {  SET_USER, SET_HANDLE_CHECK, HANDLE_CHECKED, SET_PROFILE_PICTURE} from '../actionTypes'

const initialState = {
    user: '',
    handleAvailable: '',
    handleChecked: '',
    profilePicForUpload: ''
}


const userReducer = (state = initialState, action) => {
    console.log('in reducer')
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

        default:
            return state
    }
}

export default userReducer