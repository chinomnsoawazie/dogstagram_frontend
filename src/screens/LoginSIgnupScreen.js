import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Button} from 'react-native'
import Header from '../components/Header'
import { Ionicons } from '@expo/vector-icons'

function LoginSIgnupScreen({navigation}) {
    const [username, setUsername] = useState('username')
    const [password, setPassword] = useState('password')

    const handleSubmit = () => {
        console.log(username, password)
        navigation.navigate('Signup')
    }

    return (
        <>
        <StatusBar barStyle='light-content' />
        < SafeAreaView style = {styles.container} >
            <View >
                <Header title = {'DogStagram'} />
                <View style={styles.formContainer}>
                    <TextInput 
                        style = {styles.textInput}
                        placeholder="username"
                        onChangeText = { usernameText => setUsername(usernameText)}
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