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


      // yarn add react - navigation react - native - svg react - native - screens @1 .0 .0 - alpha .23 react - native - gesture - handler react - native - reanimated react - navigation - tabs react - navigation - stack react - native - ui - kitten @eva - design / eva @ui - kitten / eva - icons uuid react - native - image - picker react - native - firebase






      import React from 'react'
import { StyleSheet} from 'react-native'
import {useSelector } from 'react-redux'
// import { mapping, light as lightTheme } from '@eva-design/eva'
import { mapping, light } from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from 'react-native-ui-kitten'

import TabNavigator from '../navigation/TabNavigator'


// const ApplicationContent = () => (
//   <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Welcome to UI Kitten</Text>
//   </Layout>
// )

const LoggedInUserScreen = () =>(
    <ApplicationProvider mapping={mapping} theme={light}>
        <TabNavigator />
    </ApplicationProvider>


)

//old screen

// function LoggedInUserScreen() {

//         const thisUser = useSelector(state => state.allUserInfo.user)

//         console.log(thisUser)
//     return (
//         <SafeAreaView style={styles.container}>
//             <View style={styles.headerContainer}>
//             <Text> user Header</Text>
            

//             </View>

//             <ScrollView style={styles.scrollView}>
//                 <Text>user dogs</Text>
//             </ScrollView>


//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'blue',
//         alignItems: 'center',
//         justifyContent: 'center',
//         bottom: 20
//     },
//     headerContainer: {
//         marginTop: '15%',
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexDirection: 'column',
//     },
//     textInput: {
//         marginTop: 20,
//         width: 300,
//         height: 40,
//         paddingHorizontal: 10,
//         borderRadius: 50,
//         backgroundColor: '#DCDCDC',
//         textAlign: 'center'
//     },
//     buttonContainer: {
//         justifyContent: 'center',
//         flexDirection: 'row',
//     },
//     scrollView: {
//         backgroundColor: 'pink',
//         marginTop: '35%',
//         width: '100%',
//         height: '10%',
//     },
// })

export default LoggedInUserScreen