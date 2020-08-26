// Log of Todo, FixMe and other pending stuff or design ideas to implement

export const signup = (user, dispatch) => {
    console.log(user)

    axios.post(`http://localhost:3000/users`, user)
        .then(newUserObj => {
            console.log('new user', newUserObj)
            dispatch({
                type: SET_USER,
                payload: newUserObj.data
            })
        })
}



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
        photo: user.photo.split(":"),
        file_name: user.file_name,
      }),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            dispatch({
              type: SET_USER,
              payload: data,
            });
          });
        } else {
          // dispatch({
          //     type: 'POST_CREATE_FAILED'
          // })
          return Promise.reject("error");
        }
      })
      .catch((e) => {
        return Promise.reject(e);
      });