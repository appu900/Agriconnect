import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import menu from "../../assests/icons/menu.png";

export default function FeedHeader({username}) {
  return (
    <View style={styles.feedHeaderContainer}>
    <View style={styles.flexBoxOne}>
      <View>
        <Image
        style={{
            width:45,
            height:45,
            borderRadius:50,
        }}
        source={{
            uri:'https://media.istockphoto.com/id/178384762/photo/hiking-in-himalaya-mountains.jpg?s=2048x2048&w=is&k=20&c=hUHeBRcQ8pyVLcn2M5nGEnE3HiP8uILad7k-rk7qCTE='
        }}/>
      </View>
      <View>
         <Text style={styles.username}>{username}</Text>
         <Text style={styles.time}>1 hour</Text>
      </View>
    </View>
    <View>
    </View>    
        <Image source={menu}/>   
    </View>
  )
}

const styles = StyleSheet.create({
    feedHeaderContainer:{
        backgroundColor:"#F3F7FC",
        alignItems:'center',
        width:'100%',
        height:60,
        display:'flex',
        flexDirection:'row',
        direction:'ltr',
        justifyContent:"space-between",
    },

    username:{
       fontSize:17,
       fontWeight:"700",
       color:"black",
    },

    flexBoxOne:{
        display:"flex",
        flexDirection:"row",
        gap:10,
        alignItems:"center",
    },

    imageMenu:{
       width:10,
       height:10,
    },

    time:{
        fontWeight:"600",
        color:"black"
    }


})