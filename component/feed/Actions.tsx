import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  Alert,
  TextInput,
  Button,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Avatar} from '@rneui/themed';

import likeIconLight from '../../assests/icons/like-light.png';
import likeIconDark from '../../assests/icons/like-fill.png';
import commentIcon from '../../assests/icons/comment.png';
import repostIcon from '../../assests/icons/repost.png';
import shareIcon from '../../assests/icons/share.png';
import likeFillIcon from "../../assests/icons/likefill.png"
import likeBlueIcon from "../../assests/icons/likeBlue.png"

import Comment from './Comment';
import CommentModal from './Comment';
import Modal from 'react-native-modal';

export default function Actions() {
  const [liked, setLiked] = useState<boolean>(false);
  const [openCommentSection, setOpenCommentSection] = useState(false);
  function handleComment() {
    setOpenCommentSection(openCommentSection => !openCommentSection);
  }
  function handleLike(){
    setLiked(!liked);
  }
  return (
    <View>
      <View style={styles.action_section}>
        <View style={styles.flexbox}>
          <TouchableOpacity onPress={handleLike}>
          <Image style={styles.icons} source={ liked ? require("../../assests/icons/likeBlue.png") : require('../../assests/icons/like-light.png')} />
          </TouchableOpacity>
          <Text style={styles.text}>120 likes</Text>
        </View>
        <View style={{
          display:"flex",
          flexDirection:'row',
          alignItems:"center",
          gap:17,
        }}>
          <Comment/>
          <Text style={styles.text}>34 comment</Text>
        </View>
        <View style={styles.flexbox}>
          <Image style={styles.icons} source={repostIcon} />
          <Text style={styles.text}>78 repost</Text>
        </View>
      </View>

      {/* comment section */}
      {/* <View style={ openCommentSection ? {
        width:"100%",
        height:70,
        marginTop:10,
        backgroundColor:"#F3F7FC"
        
      } : {
        width:"100%",
        height:70,
        marginTop:10,
        display:"none",
        backgroundColor:"#F3F7FC"
      }}>
        <Comment/>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  informationSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    color: 'black',
  },

  informationSection_second_section: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  text: {
    color: 'gray',
    fontWeight: '400',
  },

  action_section: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 6,
    marginTop: 10,
  },

  icons: {
    width: 25,
    height: 25,
  },

  flexbox: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
});
