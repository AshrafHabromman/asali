import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useContext} from 'react';
import {View, ActivityIndicator, Platform} from 'react-native';
import {Formik} from 'formik';

import axios from 'axios';
//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
//google
import * as Google from 'expo-auth-session/providers/google';
import * as GoogleSignin from 'expo-google-sign-in';
import * as WebBrowser from 'expo-web-browser';

//storage 
import AsyncStorage from '@react-native-async-storage/async-storage';

// Credentials context
import {CredentialsContext} from './../components/credentialsContext';

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

WebBrowser.maybeCompleteAuthSession();

const Login = ({navigation}) => {
    const    config = {
        expoClientId:"330096218249-ac9golru5j9qb2480anvfhtnef69cts9.apps.googleusercontent.com",
        iosClientId: "330096218249-tg9fs1t61smihbj8uovp4bou7id06qtp.apps.googleusercontent.com",
        androidClientId: "330096218249-i6d9jmk15rpla8ei2o5151umcoq4hrg6.apps.googleusercontent.com",
    }

    const [hidePassword, setHidePassword] = useState(true);
    const [message, setMessage] = useState("");   
    const [messageType, setMessageType] = useState();
    const [googleSubmitting, setGoogleSubmitting] = useState();
    const [accessToken, setAccessToken] = useState();
    const [user, setUser] = useState();
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest(config);
    const iosClientId =  "330096218249-tg9fs1t61smihbj8uovp4bou7id06qtp.apps.googleusercontent.com";
    const androidClientId = "330096218249-i6d9jmk15rpla8ei2o5151umcoq4hrg6.apps.googleusercontent.com";
    
    // context 
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    
    const handleMessage = (message, type='FAILED') => {
        setMessage(message);
        setMessageType(type);
    }

    const handleLogin = (credentials, setSubmitting) => {
        //TODO:
        const url = 'https://whispering-headland-00232.herokuapp.com/user/signin'; 
        
        axios
        .post(url, credentials)
        .then((response) => {
            const result = response.data;
            const {message, status, data} = result;

            if(status !== 'SUCCESS'){
                handleMessage(message, status);
                
            }
            else{
                presistLogin({...data[0]}, message, status)
            }
            setSubmitting(false)    
        })
        .catch(error => {
            // navigation.navigate('Welcome',);
            setSubmitting(false)
            handleMessage("An error occurred ", )
            console.log(error);
        })
    }

    useEffect(() => {
        if (response?.type === 'success') {
            // setAccessToken(response.authentication.accessToken);
            setGoogleSubmitting(false);
            // getUserData();
            console.log(response.authentication)
          }
          setGoogleSubmitting(false);
      }, [response]);

    const getUserData = async () => {
        let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
          headers: { Authorization: `Bearer ${accessToken}`}
        });
    
        userInfoResponse.json().then(data => {
          setUser(data);
          console.log(data);
          console.log(data.email);
        });
      }


    const handelGoogleSignin = async () => {
        setGoogleSubmitting(true);
        promptAsync({useProxy: false, showInRecents: true});
    }

    const presistLogin = (credentials, message, status) => {
        AsyncStorage.setItem('asali', JSON.stringify(credentials))
        .then(() => {
            handleMessage(message, status);
            setStoredCredentials(credentials)
        })
        .catch((error) => {
            console.log(error)
            handleMessage('Presisting login failed')
        })
    }

    return (
        <StyledContainer>
            <StatusBar style='dark'/>
            <InnerContainer>
                <PageLogo resizeMode='cover' source={require('../assets/logos/logo.png')} />
                <SubTitle>Account login</SubTitle>
                
                <Formik
                    initialValues={{email:'', password:''}}
                    onSubmit={(values, {setSubmitting}) => {
                        if(values.email == '' || values.password == ''){
                            handleMessage('Please set all the fields');
                            setSubmitting(false);
                        }
                        else{
                            handleLogin(values, setSubmitting);
                        }
                        
                        console.log(values);
                    }}
                >
                {
                    ({handleChange, handleBlur, handleSubmit, values, isSubmitting}) =>
                        (                    
                        <StyledFormArea>
                            <MyTextInput 
                            label="Email Address"
                            icon="mail"
                            placeholder="someone@gmail.com"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                            />
                            <MyTextInput 
                            label="Password"
                            icon="lock"
                            placeholder='* * * * * * *'
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                            />
                            <MsgBox type={messageType}> {message} </MsgBox>
                            
                            { !isSubmitting && <StyledButton onPress={handleSubmit}>
                                <ButtonText>Login</ButtonText>
                            </StyledButton>}

                            { isSubmitting && <StyledButton disabled={true}>
                                <ActivityIndicator size="large" color={tertiary}/>
                            </StyledButton>}

                            <Line />
                            {!googleSubmitting && (<StyledButton google={true} onPress={handelGoogleSignin}>   
                                <Fontisto name="google" size={25} color={secondary}/>
                                <ButtonText google={true} >
                                    Sign in with Google
                                </ButtonText>
                            </StyledButton>)}
                            {googleSubmitting && (<StyledButton  disabled={true}>   
                                <ActivityIndicator size='large' color={tertiary}/>
                            </StyledButton>)}

                            

                            <ExtraView>
                                <ExtraText>Don't have an account? </ExtraText>
                                <TextLink onPress={() => navigation.navigate('Signup')}>
                                    <TextLinkContent>Sign up</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </StyledFormArea> 
                        )
                    
                }
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
}; 

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
             <LeftIcon>
                <Octicons name={icon} size={30} color={brandColor}/>
             </LeftIcon>
             <StyledInputLabel>{label}</StyledInputLabel>
             <StyledTextInput {...props}/>
             {isPassword && (
                <RightIcon onPress={ () => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={tertiary}  />
                </RightIcon>
             )}
        </View>
    );
};



export default Login;