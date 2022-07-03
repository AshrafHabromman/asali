import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext} from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

//date time
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

//storage 
import AsyncStorage from '@react-native-async-storage/async-storage';

// Credentials context
import {CredentialsContext} from './../components/credentialsContext';

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import {
    StyledContainer, 
    InnerContainer, 
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledTextInput, 
    StyledInputLabel,
    LeftIcon, 
    RightIcon,
    StyledButton,
    ButtonText, 
    Colors,
    MsgBox,
    Line, 
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent,

} from './../components/styles'; 



const {primary_1, darkPrimary, secondary, tertiary, brandTitle, brandColor} = Colors;

const Welcome = () => {

    const [hidePassword, setHidePassword] = useState(true)
    const [hideConfirmPassword, setHideConfirmPassword] = useState(true)
    const [date, setDate] = useState(new Date(2000,1,1));
    // context 
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    const {name, email, photorUrl} = storedCredentials;

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showMode = () => {
        // console.log('hi')
        DateTimePickerAndroid.open({
        value: date,
        onChange:onChangeDate,  
        mode: 'date',
        color:{tertiary}
        })
    };

    const clearLogin = () => {
        AsyncStorage.removeItem('asali')
        .then(() => {
            setStoredCredentials("")
        })
        .catch(error => console.log(error))
    }

    
function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

  const Tab = createMaterialBottomTabNavigator();

    return (

        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}; 

export default Welcome;

{/* <StyledContainer>
<StatusBar style='dark'/>
<InnerContainer>
    <PageLogo resizeMode='cover' source={require('../assets/logos/logo.png')} />
    <SubTitle>Welcome onboard</SubTitle>
    
    <StyledButton color={secondary} onPress={clearLogin}>
        <ButtonText color={tertiary}>Logout</ButtonText>
    </StyledButton>
</InnerContainer>
</StyledContainer> */}
