import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import Feed from '../feed/Feed'

const data = [
  {"username":"subham",id:1,post:"https://cdn.pixabay.com/photo/2016/10/21/14/46/fox-1758183_1280.jpg"},
  {"username":"subham1",id:2,post:"https://cdn.pixabay.com/photo/2021/12/11/15/06/northern-lights-6862969_640.jpg"},
  {"username":"subham11",id:3,post:"https://cdn.pixabay.com/photo/2019/06/04/19/54/norway-4252178_960_720.jpg"},
  {"username":"subham111",id:4,post:"https://cdn.pixabay.com/photo/2021/05/05/15/33/mountain-6231396_960_720.jpg"},
]

export default function ProfilePosts() {
  return (
    <SafeAreaView style={{flex:1}}>
        <FlatList
        data={data}
        keyboardDismissMode='on-drag'
        nestedScrollEnabled={true}
        scrollEnabled={false}
        renderItem={({item}) => <Feed username={item.username} postImg={item.post} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}