import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, { useState } from 'react';
import {Avatar} from 'react-native-paper';
import {Image} from '@rneui/base';
import likeBlueIcon from '../../assests/icons/likeBlue.png';

export default function CommentCard() {
  const[liked,setLiked] = useState(false);   
  const handleLike = async() =>{
    setLiked(!liked)
  }
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          // alignItems:"center",
          alignItems: 'flex-start',
          gap: 6,
          marginTop: 13,
          borderRadius: 8,
          borderTopLeftRadius: 0,
        }}>
        <View>
          <Avatar.Image
            size={40}
            source={require('../../assests/images/subham.jpg')}
          />
        </View>
        {/* comment box section */}
        <View
          style={{
            backgroundColor: '#EEEEEE',
            flex: 1,
            minHeight: 80,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontWeight: 400,
              fontSize: 16,
              color: 'black',
            }}>
            Subham mishra{' '}
          </Text>
          <Text
            style={{
              marginTop: 2,
              fontWeight: 300,
              color: 'black',
              fontSize: 15,
            }}>
            this ia good problem
          </Text>
        </View>
      </View>

      {/* like and comment section */}
      <View style={{paddingHorizontal:50,display:"flex",flexDirection:"row", alignItems:"center",gap:10,marginTop:10}}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 3,
          }}>

          <Pressable onPress={handleLike}>

          {
            liked ? ( <Image source={likeBlueIcon} style={{width: 20, height: 20}} />): <Text>Like</Text>
          }
          </Pressable>
         
         
        </View>
        <Pressable>
            <Text>Reply</Text>
        </Pressable>
      </View>
    </View>
  );
}
