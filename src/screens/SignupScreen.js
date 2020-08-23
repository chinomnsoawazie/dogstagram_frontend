import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Button} from 'react-native'

function SignupScreen({navigation}) {
    return (
        <SafeAreaView SafeAreaView style = {styles.container} >
            <View >
                <Text>
                    Signup screen
                </Text>
                    <Button style = {styles.buttonContainer}
                    title = 'Go Back'
                    onPress={() => navigation.navigate('LoginSignupScreen')}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
     buttonContainer: {
        backgroundColor: 'blue',
        borderRadius: 35,
        justifyContent: 'center',
        flexDirection: 'row',
        bottom: 20
     },
})

export default SignupScreen