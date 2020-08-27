import React, { Fragment} from 'react'
// import {useSelector } from 'react-redux'
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider, IconRegistry} from 'react-native-ui-kitten'
import { EvaIconsPack} from '@ui-kitten/eva-icons'

import TabNavigator from '../navigation/TabNavigator'

const LoggedInUserScreen = () =>(
    <Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={lightTheme}>
            <TabNavigator />
        </ApplicationProvider>
    </Fragment>
)


export default LoggedInUserScreen