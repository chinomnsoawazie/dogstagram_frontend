import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform, TextInput, SafeAreaView, ScrollView, Button, Alert} from 'react-native'
import {Ionicons } from '@expo/vector-icons'
import { useSelector, useDispatch } from 'react-redux'
// import ImagePicker from "react-native-image-picker"
// import * as Progress from "react-native-progress";
// import * as ImagePicker from 'expo-image-picker'
import Constants from 'expo-constants'
import * as Permissions from 'expo-permissions'
import ImagePickerComponent from '../components/ImagePicker'



function PictureUpload({navigation}) {
    const pictureForUpdate = useSelector(state => state.allUserInfo.profilePicForUpload)

   


    return (
        // let {picture} = 
        <SafeAreaView SafeAreaView style = {styles.container} >
            < View style = {styles.innerContainer }>
                <View style={styles.closeButtonContainer}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => navigation.goBack()}>
                            <Text style={styles.closeButtonText} > Done</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.modalContainer}>

                    <ImagePickerComponent />

                    
                    {/* <Text style={{ color: '#444', fontSize: 20 }}>
                        What do you want to do?
                    </Text> */}
                </View>

            </View>
        </SafeAreaView>
    )
}







const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        height: '70%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#fff'
    },
    closeButtonContainer: {
        position: 'absolute',
        alignItems: 'flex-end',
        right: 10
    },
  closeButton: {
      top: 5,
      alignItems: 'center',
      backgroundColor: 'blue',
      justifyContent: 'center',
      borderRadius: 20,
    },
    closeButtonText: {
        fontWeight: 'bold',
        color: '#fff',
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        margin: 60,
        top: 10,
        left: 50
    }

})

export default PictureUpload
