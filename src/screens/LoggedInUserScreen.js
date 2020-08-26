import React from 'react'
import { StyleSheet, Text, View, TextInput, SafeAreaView, ScrollView, Image, Button, Alert} from 'react-native'
import {useSelector } from 'react-redux'

function LoggedInUserScreen() {

        const thisUser = useSelector(state => state.allUserInfo.user)

        console.log(thisUser)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
            <Text> user Header</Text>
            

            </View>

            <ScrollView style={styles.scrollView}>
                <Text>user dogs</Text>
            </ScrollView>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 20
    },
    headerContainer: {
        marginTop: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        // bottom: 20
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
    },
    scrollView: {
        backgroundColor: 'pink',
        marginTop: '35%',
        width: '100%',
        height: '10%',
    },
})

export default LoggedInUserScreen