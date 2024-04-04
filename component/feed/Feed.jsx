import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import FeedHeader from './FeedHeader'
import FeedImage from './FeedImage'
import Actions from './Actions'

export default function Feed({username,postImg}) {
  const[openCommentSection,setOpenCommentSection] = useState(false);
  return (
    <View style={styles.feedContainer}>
      <FeedHeader username={username}/>
      <View>
        <Text style={styles.caption}>
            How to deal with pests and deseases on certain plants How to deal with pests and deseases on certain plants
        </Text>
      </View>
      <View style={styles.imageSection}>
      <FeedImage imgUrl={postImg}/>
      </View>
      <View style={styles.actionsLayout}>
        <Actions/>
      </View>

      {/* comment section */}
   
    </View>
  )
}
const styles = StyleSheet.create({
    feedContainer:{
        backgroundColor:"#F3F7FC",
        paddingHorizontal:12,
        paddingVertical:12,
        borderBottomColor:"black",
        borderColor:"black",
        marginTop:1,
    },

    caption:{
        fontSize:16,
        color:"black",
        marginTop:10,
        fontWeight:"400",
        marginLeft:6,
    },

    imageSection:{
        marginTop:10,
    },

    actionsLayout:{
        marginTop:10,
    }
})