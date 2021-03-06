import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, Image, Button, Alert} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { signup, checkHandle} from '../redux/actions'
import Constants from 'expo-constants'

function SignupScreen({navigation}) {
    const [name, setName] = useState('name')
    const [handle, setHandle] = useState('handle')
    const [city, setCity] = useState('city')
    const [state, setState] = useState('state')
    const [country, setCountry] = useState('country')
    const [password, setPassword] = useState('password')
    const [confirm, setConfirm] = useState('confirm')
    const dispatch = useDispatch()
    const handleCheck = useSelector(state => state.allUserInfo.handleAvailable)
    const isHandleChecked = useSelector(state => state.allUserInfo.handleChecked)
    const pictureForUpload = useSelector(state => state.allUserInfo.profilePicForUpload)
    const checkIfLoggedIn = useSelector(state => state.allUserInfo.checkIfLoggedIn)

    const handleChange = () => {
        checkHandle(handle, dispatch)
    }

    const handleSubmit = async () => {
        let file_name = name + 'ProfilePic.png'
        let user = {
            name: name,
            handle: handle,
            city: city,
            state: state,
            country: country,
            password: password,
            photo: pictureForUpload,
            file_name: file_name
        }
        
        if(!handleCheck){
            return alert("Please check if username is available")
        } else if (password !== confirm) {
            return alert("Passwords don't match")
        }

        await signup(user, dispatch)
    }

    if (checkIfLoggedIn) {
        console.log(checkIfLoggedIn)
        navigation.navigate('LoggedInUser')
    }

    const showHandleChecked = () => {
        if(isHandleChecked){
            return handleCheck ? 'Available' : 'Not available'
        }
    }

    
    return (
        <SafeAreaView SafeAreaView style = {styles.container} >

                <Text style={styles.headertext}>
                    Signup
                </Text>
            <ScrollView 
                style={styles.scrollview} 
                scrollsToTop = 'true'
                pinchGestureEnabled= 'true'
                overScrollMode = 'true'>
                <View style={styles.formContainer}>
                    <TextInput 
                        style = {styles.textInput}
                        placeholder="name"
                        onChangeText = { name => setName(name)}
                    />

                    < Button
                    color = 'blue'
                    title = 'Upload profile pic'
                    onPress = {() => navigation.navigate('PictureUpload')}
                    />

                    <Image 
                    source={{ uri: pictureForUpload.uri }} 
                    style={{ width: 100, height: 100, justifyContent: 'center'}}
                    />
                  
                    < TextInput
                        style = {styles.textInput}
                        placeholder = "@handle"
                        onChangeText = {handle => setHandle(handle)}
                    />

                    < Button 
                    color= 'blue'
                    title = 'Check handle availability'
                    onPress={() => handleChange()}/>

                    <Text style={{textAlign: 'center'}}>
                        {showHandleChecked()}
                    </Text>

                    <TextInput 
                        style = {styles.textInput}
                        placeholder = "city"
                        onChangeText = {city => setCity(city)}
                    />
                    <TextInput 
                        style = {styles.textInput}
                        placeholder = "state"
                        onChangeText = {state => setState(state)}
                    />
                    <TextInput 
                        style = {styles.textInput}
                        placeholder = "country"
                        onChangeText = {country => setCountry(country)}
                    />

                    <TextInput
                        style = {styles.textInput}
                        placeholder="password" 
                        secureTextEntry={true}
                        onChangeText = { password => setPassword(password)}
                    />
                    <TextInput
                        style = {styles.textInput}
                        placeholder="confirm password" 
                        secureTextEntry={true}
                        onChangeText = {confirm => setConfirm(confirm)}
                    />

                    <Text> {password === confirm ? 'Passwords match' : 'Password dont match'}</Text>
 
                </View>

                <View style={styles.submitContainer}>
                    < Button 
                    color= 'blue'
                    title = 'Create account'
                    onPress={() => handleSubmit()}/>
                    
                    <Button
                    color='brown'
                    title = 'Back to login'
                    onPress={() => navigation.navigate('LoginSignupScreen')}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffc4b0',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Constants.statusBarHeight
    },
    submitContainer: {
        top: 10,
        paddingHorizontal: 10,
    },
    textInput: {
        marginTop: 20,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: '#DCDCDC',
        textAlign: 'center'
    },
    headertext: {
        color: 'blue',
        fontSize: 48,
        fontWeight: '500',
        fontWeight: 'bold',
        marginTop: 30
    }, 
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    
    },

})

export default SignupScreen