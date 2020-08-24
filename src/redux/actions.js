import axios from 'axios'
import { SET_USER, SET_HANDLE_CHECK, HANDLE_CHECKED, SET_PROFILE_PICTURE } from './actionTypes'


export const login = (user, dispatch) =>{
    axios.post(`http://localhost:3000/login`, user)
    .then(userObj => {
        // console.log('from backend', userObj)
        dispatch({ type: SET_USER, payload: userObj.data})
    })
}

export const checkHandle = (handle, dispatch) => {
    axios.get(`http://localhost:3000/users/checkhandle/${handle}`)
    .then(r => {
        console.log(r.data)
        dispatch({type: HANDLE_CHECKED, payload: true})
        dispatch({type: SET_HANDLE_CHECK, payload: r.data})

    })
}


export const signup = (user, dispatch) => { 
    axios.post(`http://localhost:3000/login`, user)
    .then(newUserObj => {
        console.log('new user', newUserObj)
        dispatch({ type: SET_USER, payload: newUserObj.data})
    })
}

export const setProfilePic = (picFile, dispatch) => {
    dispatch({type: SET_PROFILE_PICTURE, payload: picFile})
}