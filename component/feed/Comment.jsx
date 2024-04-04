import React, {useRef} from 'react';
import {View, Button, Text, TextInput, Pressable, Image} from 'react-native';
import CommentIcon from '../../assests/icons/comment.png';
import RBSheet from 'react-native-raw-bottom-sheet';

export default function Comment() {
  const refRBSheet = useRef();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}>
      <Pressable
        title="OPEN BOTTOM SHEET"
        onPress={() => refRBSheet.current.open()}>
        <Image
          style={{
            width: 25,
            height: 25,
          }}
          source={CommentIcon}
        />
      </Pressable>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            paddingHorizontal: 35,
          }}>
          <TextInput
            multiline={true}
            numberOfLines={6}
            placeholder="enter your comment"
            style={{
              backgroundColor: '#EEEEEE',
              width: '100%',
              borderRadius: 10,
              flex: 1,
              textAlignVertical: 'top',
              justifyContent: 'flex-start',
              padding:10,
              color:"black"
            }}
          />
     
        </View>
        <View style={{
          paddingHorizontal:35,
          marginTop:20,
        }}>
        <Pressable style={{
           backgroundColor:"black",
           padding:14,
           borderRadius:10,
           display:"flex",
           flexDirection:"row",
           alignItems:"center",
           justifyContent:"space-evenly"

        }}>
            <Text style={{
              color:"white",
              
            }}>Post Comment</Text>
          </Pressable>
        </View>
      </RBSheet>
    </View>
  );
}
