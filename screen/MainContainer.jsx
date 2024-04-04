import React from 'react';
// import {  npx react-native start, StyleSheet } from 'react-native';

import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icon} from "react-native-paper"
// import Icon from 'react-native-ionicons'

import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from './FeedScreen';
import ProfileScreen from './ProfileScreen';
import MakeAPost from './MakeAPost';

// Screen names
// const homeName = 'Feed';
// const profileName = 'Profile';
// const postName = 'Post';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
        style={{
        backgroundColor:"white",
        borderStyle:"solid",
        borderTopWidth:1,
        borderBlockColor:"black",
        height:60,
        }}
          navigationState={state}
         safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
             navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={FeedScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Icon source="home" size={size} color={color}  />;
          },
        }}
      />
        <Tab.Screen
        name="make a post"
        component={MakeAPost}
        options={{
          tabBarLabel: 'post',
          tabBarIcon: ({ color, size }) => {
            return <Icon source="home" size={size} color={color}  />;
          },
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => {
            return <Icon source="cog" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>  
    </NavigationContainer>
  );
}
