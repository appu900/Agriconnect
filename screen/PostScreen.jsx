import { View, Text } from 'react-native'
import React from 'react'
import Feed from '../component/feed/Feed'
import CommentCard from '../component/commentSection/CommentCard'
export default function PostScreen() {
  return (
    <View>
      <Feed username="appu"/>

      {/* comment section */}
      <View style={{
        paddingHorizontal:15,
        marginTop:15,
      }}>
        <View>
            <Text style={{
                color:"black",
                fontSize:15,
                fontWeight:500,
            }}>Comments</Text>
        </View>

        {/* comment card section */}
        <View style={{
            marginTop:14,
        }}>
            <CommentCard/>
            <CommentCard/>
            
        </View>
      </View>
    </View>
  )
}