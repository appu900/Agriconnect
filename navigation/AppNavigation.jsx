import {View, Text} from 'react-native';
import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from '../screen/FeedScreen';
import ProfileScreen from '../screen/ProfileScreen';
import FeedTab from './Tabs/FeedTab';
import ProfileTab from './Tabs/ProfileTab';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    function MyStack() {
        return (
          <Stack.Navigator>
            <Stack.Screen name="Tabs" component={MyTabs} />
          </Stack.Navigator>
        );
      }

      function MyTabs(){
        return(
            <Tab.Navigator>
                <Tab.Screen name='HomeTabs' component={FeedTab}/>
                <Tab.Screen name="profileTab" component={ProfileTab}/>
            </Tab.Navigator>
        )
      }
  return <NavigationContainer>
    <MyStack/>
  </NavigationContainer>;
}
