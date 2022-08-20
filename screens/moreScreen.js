
import React, {useState, useContext} from 'react';
import {View,} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

// Credentials context
import {CredentialsContext} from './../components/credentialsContext';

import {
    StyledButton,
    ButtonText, 
    Colors,
} from './../components/styles'; 

const {primary_1, darkPrimary, secondary, tertiary, brandTitle, brandColor} = Colors;

export default function MoreScreen({navigation}) {

    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);

    const clearLogin = () => {
        AsyncStorage.removeItem('asali')
        .then(() => {
            setStoredCredentials("")
        })
        .catch(error => console.log(error))
    }

    return (
      <View style={{ flex: 1, margin:20 }}>
        <StyledButton color={secondary} onPress={()=>navigation.navigate('EditAccountScreen')}/*onPress={clearLogin} */>
            <ButtonText color={tertiary} >Settings</ButtonText>
        </StyledButton>
        <StyledButton color={secondary} onPress={clearLogin} >
            <ButtonText color={tertiary} >Log out</ButtonText>
        </StyledButton>
      </View>
    );
  }