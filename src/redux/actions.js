import axios from 'axios'
import { SET_USER, SET_HANDLE_CHECK, HANDLE_CHECKED, SET_PROFILE_PICTURE } from './actionTypes'
import { useDispatch} from 'react-redux'


export const login = (user, dispatch) =>{
    axios.post(`http://localhost:3000/login`, user)
    .then(userObj => {
        console.log('from backend', userObj)
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

    // debugger

    // user.photo.uri.split(":")[1];

     fetch(`http://localhost:3000/users`, {
       method: "POST",
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         name: user.name,
         handle: user.handle,
         city: user.city,
         state: user.state,
         country: user.country,
         password: user.password,
         photo: user.photo.uri.split(":")[1],
         file_name: user.file_name,
       })
     }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
            console.log(data)
          dispatch({
            type: SET_USER,
            payload: data
          });
        });
      } else {
        return Promise.reject('error')
      };
    }).catch(e => {
      return Promise.reject(e)
    })
  };










    //    .then((response) => {
    //        console.log(response)
    //        response.json();
    //    })
    //    .then(data => {

    //     console.log(data)
    //     // dispatch({
    //     //     type: 'POST_CREATE_FAILED'
    //     // })
    //    })
    //    .catch((error) => {
    //        console.error('Error: ', error)
    //    })


