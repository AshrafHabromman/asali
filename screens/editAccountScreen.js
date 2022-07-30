import { Platform, StyleSheet, Text, View, ImageBackground, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import {
  EvilIcons,
  FontAwesome,
  MaterialCommunityIcons
}
  from 'react-native-vector-icons';


//colors
import { Colors, Line, MsgBox } from '../components/styles';

import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider
} from '@gorhom/bottom-sheet';

import * as ImagePicker from 'expo-image-picker';

const { primary_1, darkPrimary, secondary, tertiary } = Colors;

const EditAccountScreen = () => {

  
  const [image, setImage] = useState('C:\Users\Ashraf Habromman\asali\assets\logos\logo.png');

  const bottomSheetRef = useRef(null);

  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', bottomSheetRef.current);
  }, []);

  const snapPoints = useMemo(() => ['25%', '55%'], []);

  const takePhotoFromCamera = async () => {

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const pickPhoto = async () => {
    console.log('hi from library')
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <BottomSheetModalProvider>
      <ScrollView style={styles.containter}>


        <BottomSheetModal
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.panel}>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.panelTitle}>Upload photo</Text>
              <Text style={styles.panelSubtitle}>Chose Your Profile photo</Text>
            </View>
            <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
              <Text style={styles.panelButtonTitle}>Take a photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={pickPhoto}>
              <Text style={styles.panelButtonTitle}>Upload one</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={() => { bottomSheetRef.current?.dismiss(); }}>
              <Text style={styles.panelButtonTitle}>Cancel</Text>
            </TouchableOpacity>

          </View>
        </BottomSheetModal>

        <View style={{ margin: 20 }}>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={() => { bottomSheetRef.current?.present(); }}>
              <View style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <ImageBackground
                  source={{uri: image,}}
                  style={{ height: 100, width: 100 }}
                  imageStyle={{ borderRadius: 15 }}
                >
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', opacity: 0.8 }}>
                    <EvilIcons name='camera' size={38} color="#fff" ></EvilIcons>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
              Ashraf Habromman
            </Text>
          </View>

          <Line />

          <View style={styles.action}>
            <FontAwesome name='user-o' color={secondary} size={20} />
            <TextInput
              placeholder='Name'
              placeholderTextColor={'#666666'}
              style={[styles.textInput, { color: tertiary }]}
            ></TextInput>
          </View>

          <View style={styles.action}>
            <FontAwesome name='envelope-o' color={secondary} size={20} />
            <TextInput
              placeholder='email'
              keyboardType='email-address'
              placeholderTextColor={'#666666'}
              style={[styles.textInput, { color: tertiary }]}
            ></TextInput>
          </View>

          <View style={styles.action}>
            <MaterialCommunityIcons name='map-marker-radius' size={20} color={secondary} />
            <TextInput
              placeholder='location'
              placeholderTextColor={'#666666'}
              style={[styles.textInput, { color: tertiary }]}
            ></TextInput>
          </View>
          {/* 
        <View style={styles.action}>
          <FontAwesome name='user-o' color={secondary} size={20} />
          <TextInput
            placeholder='First name'
            placeholderTextColor={'#666666'}
            style={[styles.textInput, { color: 'blue'}]}
          ></TextInput>
        </View> */}

          <Line />

          <Text style={{ marginTop: 10, fontSize: 15, fontWeight: 'bold' }}>
            Edit Password
          </Text>

          <View style={styles.action}>
            <FontAwesome name='lock' color={secondary} size={20} />
            <TextInput
              placeholder='Old password'
              placeholderTextColor={'#666666'}
              style={[styles.textInput, { color: tertiary }]}
            ></TextInput>
          </View>

          <View style={styles.action}>
            <FontAwesome name='lock' color={secondary} size={20} />
            <TextInput
              placeholder='New password'
              placeholderTextColor={'#666666'}
              style={[styles.textInput, { color: tertiary }]}
            ></TextInput>
          </View>
          <View style={styles.action}>
            <FontAwesome name='lock' color={secondary} size={20} />
            <TextInput
              placeholder='Confirm new password'
              placeholderTextColor={'#666666'}
              style={[styles.textInput, { color: tertiary }]}
            ></TextInput>
          </View>

          <MsgBox>soso</MsgBox>

          <TouchableOpacity style={styles.commandButton} onPress={() => { console.log('hi') }}>
            <Text style={styles.panelButtonTitle}> Submit </Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    </BottomSheetModalProvider>
  )
}

const styles = StyleSheet.create({
  containter: {
    flex: 1,
  },

  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: secondary,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 60,
  },
  panel: {
    flex: 1,
    // width:'100%',
    padding: 20,
    backgroundColor: 'white',
    paddingTop: 20,
    alignItems: 'center',
    // opacity:1
  },
  header: {
    backgroundColor: 'white',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center'
  },
  panelHandle: {
    width: 40,
    height: 0,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
    backgroundColor: '#fff',
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  panelButton: {
    width: '100%',
    padding: 13,
    borderRadius: 10,
    backgroundColor: secondary,
    alignItems: 'center',
    marginVertical: 5,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: tertiary,
  },
  action: {
    flexDirection: 'row',
    marginVertical: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#f2f2f2',
    paggingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    marginVertical: 5,
    paddingVertical: 5,
    borderBottomWidth: 0.2,
    borderBottomColor: secondary
  },
})

export default EditAccountScreen;