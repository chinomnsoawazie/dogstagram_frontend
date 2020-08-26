import React, {useState, useEffect} from 'react';
import { Button, Image, View, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions'
import {useDispatch } from 'react-redux'
import { SET_PROFILE_PICTURE} from '../redux/actionTypes'

function ImagePickerComponent({navigation}) {

    const [image, setImage ] = useState(null)
    const dispatch = useDispatch()
            
    useEffect(() => {
        getPermissionAsync()
    })
            
    const getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };

    const submitImage = () => {
        dispatch({ type: SET_PROFILE_PICTURE, payload: image})
    }
            
    const _pickImage = async () => {
        try {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            console.log(result)
            setImage(result);    
        }
        console.log('result', result);
        } catch (E) {
        console.log('error', E);
        }
    };

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Pick an image from camera roll" onPress={_pickImage} />
        {image && <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />}
        {image && <Button title='Submit' onPress={submitImage}>Hey</Button>}

      </View>
    );
  }

export default ImagePickerComponent