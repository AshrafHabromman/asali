import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext} from 'react';
import {View,Text, TouchableOpacity,StyleSheet, TextInput} from 'react-native';
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
import {Octicons, Ionicons, Fontisto, MaterialIcons} from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AccountAndEditAccountNav from './../navigators/accountAndEditAccountNav';

import SearchScreen from './searchScreen';
import AccountScreen from './accountScreen';

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
       <View style={styles.searchBox}>
                <TextInput 
                    placeholder='search'
                    keyboardType='numeric'
                    onChangeText={(value) => {console.log(value)}}
                    onFocus={() => {console.log('hii')}}
                ></TextInput>
            </View>
      </View>
    );
  }
  
  function getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  };
  
  function onRegionChange(region) {
    this.setState({ region });
  }



  function MoreScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <StyledButton color={secondary} onPress={clearLogin}>
            <ButtonText color={tertiary}>Logout</ButtonText>
        </StyledButton>
      </View>
    );
  }

  const Tab = createMaterialBottomTabNavigator();

    return (

        <Tab.Navigator
            initialRouteName="home"
            activeColor={ tertiary}

            barStyle={{
                backgroundColor: secondary,
                position: 'absolute',
                // right:16,
                // left:16,
                // bottom:12,
                padding:3,
                // borderRadius:15,
            }}
            screenOptions={{
                headerShown: false,
            }}
        >
          <Tab.Screen 
            name="home" component={HomeScreen} 
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="home" color={tertiary} size={26} />
                ),
              }}
            />
          <Tab.Screen 
          name="search" component={SearchScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: () => ( 
              <Ionicons name="search-outline" color={tertiary} size={26} />
            ),
          }}
          />

          <Tab.Screen 
          name="AccountAndEditAccountNav" component={AccountAndEditAccountNav} 
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="account" color={tertiary} size={26} />
            ),
          }}
          />
          
          <Tab.Screen 
          name="more" component={MoreScreen} 
          options={{
            tabBarLabel: 'More',
            tabBarIcon: () => (
              <MaterialIcons name="more-horiz" color={tertiary} size={26} />
            ),
          }}
          />
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

const styles = StyleSheet.create({

    searchBox: {
        position: 'absolute',
        marginTop: Platform.OS === 'ios' ? 40 : 20,
        flexDirection: "row",
        backgroundColor: '#fff',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
});