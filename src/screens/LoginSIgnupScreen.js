import React, {useState} from 'react'
import { StyleSheet, View, TextInput, SafeAreaView, Button} from 'react-native'
import Header from '../components/Header'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../redux/actions'

function LoginSIgnupScreen({navigation}) {
    const [handle, setHandle] = useState('@handle')
    const [password, setPassword] = useState('password')
    const thisDog = useSelector(state => state.allDogInfo.dog)
    const dispatch = useDispatch()
    
    const handleSubmit = () => {
        console.log(handle, password, thisDog)
        let user = {
            handle: handle,
            password: password
        }
        login(user, dispatch)
        navigation.navigate('LoggedInUser')
        
    }
    
    return (
        <>
        < SafeAreaView style = {styles.container} >
            <View >
                <Header title = {'DogStagram'} />
                <View style={styles.formContainer}>
                    <TextInput 
                        style = {styles.textInput}
                        placeholder="@handle"
                        onChangeText = { handleText => setHandle(handleText)}
                    />

                    <TextInput
                    style = {styles.textInput}
                    placeholder="password" 
                    secureTextEntry={true}
                    onChangeText = { passwordText => setPassword(passwordText)}
                    />
                </View>

                <View style = {styles.buttonContainer} >
                    < Button 
                    title = 'Log in'
                    onPress={() => handleSubmit()}
                    />
                    < Button 
                    title = 'Signup'
                    onPress = {() => navigation.navigate('Signup')}
                    />
                </View>
            </View>
        </ SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    formContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        bottom: 20
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
    buttonContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
    }
})

export default LoginSIgnupScreen