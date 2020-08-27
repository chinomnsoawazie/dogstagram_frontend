import React from 'react'
import { createAppContainer } from 'react-navigation'
import {  createBottomTabNavigator } from 'react-navigation-tabs'

import Activity from '../screens/Activity'
import AddDog from '../screens/AddDog'
import Feed from '../screens/Feed'
import Profile from '../screens/Profile'
import Search from '../screens/Search'

const TabNavigator = createBottomTabNavigator({
    Feed: {
        screen: Feed
    },
    Search: {
        screen: Search
    },
    AddDog: {
        screen: AddDog
    },
    Activity: {
        screen: Activity
    },
    Profile: {
        screen: Profile
    }
})

export default createAppContainer(TabNavigator)