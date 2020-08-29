import React from 'react'
import { createAppContainer } from 'react-navigation'
import {  createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { Icon} from 'react-native-ui-kitten'

import Activity from '../screens/Activity'
import AddDog from '../screens/AddDog'
import Search from '../screens/Search'

import { FeedNavigator } from './StackNavigator'

const TabNavigator = createBottomTabNavigator({
        Feed: {
            screen: FeedNavigator,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <Icon
                        name="home-outline"
                        width={32}
                        height={32}
                        fill={focused ? '#111' : '#939393'}
                    />
                )
            }
        },
        Search: {
            screen: Search,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <Icon
                        name="search-outline"
                        width={32}
                        height={32}
                        fill={focused ? '#111' : '#939393'}
                    />
                )
            }
        },
        AddDog: {
            screen: AddDog,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <Icon
                        name="plus-square-outline"
                        width={32}
                        height={32}
                        fill={focused ? '#111' : '#939393'}
                    />
                )
            }
        },
        Activity: {
            screen: Activity,
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <Icon
                        name="heart-outline"
                        width={32}
                        height={32}
                        fill={focused ? '#111' : '#939393'}
                    />
                )
            }
        },
        Profile: {
            screen: FeedNavigator,
            navigationOptions: {
                

                tabBarIcon: ({ focused }) => (
                    <Icon
                        name="person-outline"
                        width={32}
                        height={32}
                        fill={focused ? '#111' : '#939393'}
                    />
                )
            }
        }
    },
    {
        tabBarOptions: {
            showLabel: false
        }
    }
)

export default createAppContainer(TabNavigator)