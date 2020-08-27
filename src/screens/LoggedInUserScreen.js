import React, {useState} from 'react'
// import {useSelector } from 'react-redux'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider} from 'react-native-ui-kitten'
//this solves a situation where the fonts are not yet available at first component load
import { AppLoading, Asset, Icon } from 'expo-asset';
import * as Font from 'expo-font'
// import favicon from '../'


import TabNavigator from '../navigation/TabNavigator'

const strictTheme = { 'text-font-family': 'Arial' };
const customMapping = { strict: strictTheme };


function LoggedInUserScreen(props) {
    const [isLoadingComplete, setLoadingComplete] = useState(false)


     const _loadResourcesAsync = async () => {
         return Promise.all([
             Asset.loadAsync([
                 require('../assets/favicon.png'),
                 require('../assets/icon.png'),
             ]),
             Font.loadAsync({
                 'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
                 'taviraj': require('../assets/fonts/Taviraj-Regular.ttf'),
             }),
         ]);
     }

    const _handleLoadingError = error => {
         // In this case, you might want to report the error to your error
         // reporting service, for example Sentry
         console.warn(error);
     }

     const _handleFinishLoading = () => {
         setLoadingComplete(true)
        
     }
     


    // render() {
        if(!isLoadingComplete && !props.skipLoadingScrren) {
            return (
                <AppLoading 
                    startAsync={_loadResourcesAsync}
                    onError={_handleLoadingError}
                    onFinish={_handleFinishLoading}  
                />
            )
        } else {
            return (
                <ApplicationProvider mapping={mapping} theme={lightTheme} customMapping={customMapping}>
                    <TabNavigator />
                </ApplicationProvider>

            )
        }
    // }
     
}

// const styles = StyleSheet.create({})



// function LoggedInUserScreen ()({

//     const [isLoadingComplete, setLoadingComplete] = useState(false)







// })


export default LoggedInUserScreen