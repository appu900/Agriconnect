import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function FeedImage({imgUrl}) {
  return (
    <View>
      <Image style={styles.image} source={{
        uri:"https://cdn.pixabay.com/photo/2016/07/14/13/35/mountains-1516733_1280.jpg"
      }}/>
      {/* <Image style={styles.image} source={{
        uri:{imgUrl}
      }}/> */}
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:250,
        borderRadius:6,
        objectFit:'cover',
    }
})