import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

export default function ProfileHeader() {
  return (
    <View
      style={{
        width: '100%',
        height: 340,
        // backgroundColor: 'black',
        borderBlockColor: 'black',
        position: 'relative',
      }}>
      {/* background image section */}
      <View
        style={{
          width: '100%',
          height: 100,
          backgroundColor: 'gray',
        }}></View>

      {/* profile picture section */}
      <View
        style={{
          width: '100%',
          height: 100,
          //   backgroundColor:"red",
          position: 'absolute',
          top: 50,
          paddingHorizontal: 10,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'cover',
            borderRadius: 50,
          }}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2014/09/19/19/09/man-452904_1280.jpg',
          }}
        />

        <Pressable>
          <Image
            style={{
              width: 25,
              height: 25,
              marginTop: 35,
            }}
            source={require('../../assests/icons/edit.png')}
          />
        </Pressable>
      </View>

      {/* information section */}
      <View
        style={{
          marginTop: 60,
          paddingHorizontal: 10,
        }}>
        {/* main name section with blue tick */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            Subham Mishra
          </Text>
          <Image
            style={{
              width: 25,
              height: 25,
              marginTop: 2,
            }}
            source={require('../../assests/icons/bluetick.png')}
          />
        </View>
        <View
          style={{
            marginTop: 1,
          }}>
          <Text style={{color: 'black', fontSize: 17, fontWeight: '500'}}>
            Agriculture expert || standford university
          </Text>
          <Text style={{color: 'black', fontSize: 17, fontWeight: '500'}}>
            bhubaneswar,Odisha
          </Text>
        </View>
      </View>
       
      <View style={{
        marginTop:6,
        marginBottom:1,
        paddingHorizontal:10,
      }}>
        <Text>500+ followers</Text>
      </View>
      {/* follow and mail section */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          paddingHorizontal: 10,
          gap: 10,
        }}>
        <Button
          style={{
            backgroundColor: '#008DDA',
            flex:1
          }}
          icon="camera"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          follow
        </Button>

        <Button
          style={{
            color:"black",
            flex:1
          }}
          icon="camera"
          mode="outlined"
          onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 50,
    height: 50,
    // resizeMode:"cover"
  },
});
