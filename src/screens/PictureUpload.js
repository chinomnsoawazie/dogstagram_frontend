import React from 'react'
import { StyleSheet, View,  SafeAreaView, Button} from 'react-native'
import ImagePickerComponent from '../components/ImagePicker'

function PictureUpload({navigation}) {
    return (
        <SafeAreaView SafeAreaView style = {styles.container} >
            < View style = {styles.innerContainer }>
                <View style={styles.closeButtonContainer}>
                    < Button
                        color = 'blue'
                        title = 'Done'
                        onPress = {() => navigation.goBack()}
                    />
                </View>
                <View style={styles.modalContainer}>
                    <ImagePickerComponent />
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