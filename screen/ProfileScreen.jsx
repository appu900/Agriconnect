import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import Profile from '../component/profile/Profile';
import ProfilePosts from '../component/profile/ProfilePosts';

const data = [
  {
    username: 'subham',
    id: 1,
    post: 'https://cdn.pixabay.com/photo/2016/10/21/14/46/fox-1758183_1280.jpg',
  },
  {
    username: 'subham1',
    id: 2,
    post: 'https://cdn.pixabay.com/photo/2021/12/11/15/06/northern-lights-6862969_640.jpg',
  },
  {
    username: 'subham11',
    id: 3,
    post: 'https://cdn.pixabay.com/photo/2019/06/04/19/54/norway-4252178_960_720.jpg',
  },
  {
    username: 'subham111',
    id: 4,
    post: 'https://cdn.pixabay.com/photo/2021/05/05/15/33/mountain-6231396_960_720.jpg',
  },
];

export default function ProfileScreen() {
  return (
    <ScrollView>
      <Profile />
      <SafeAreaView style={{flex:1}}>
        <ProfilePosts />
      </SafeAreaView>
    </ScrollView>
  );
}
