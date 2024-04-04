import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screen/Home';
import Search from '../screen/Search';
import Profile from '../screen/Profile';
import { FOCUS } from 'nativewind/dist/utils/selector';

const Tab = createBottomTabNavigator();


const screenOptions = {
    tabBarShowLebel:false,
    tabBarHideOnKeyboard:true,
    headerShown:false,
    tabBarStyle:{
        position:"absolute",
        bottom:0,
        right:0,
        left:0,
        elevation:0,
        height:70,
    }

}

export default function ButtomTabNavgation() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
        name='Home' 
        component={Home}
        options={{
          tabBarButton:({focused}) => {
            return 
          }
        }}
        />
        <Tab.Screen name='search' component={Search}/>
        <Tab.Screen name='profile' component={Profile}/>
    </Tab.Navigator>
  )
}