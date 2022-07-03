import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext} from 'react';
import {View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Formik} from 'formik';
import axios from 'axios';
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

const Signup = ({navigation}) => {

    const [hidePassword, setHidePassword] = useState(true)
    const [hideConfirmPassword, setHideConfirmPassword] = useState(true)
    const [message, setMessage] = useState("");   
    const [messageType, setMessageType] = useState();
    const [date, setDate] = useState(new Date(2000,1,1));

    // context 
    const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);
    
    const handelMessage = (message, type='FAILED') => {
        setMessage(message);
        setMessageType(type);
    }

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showMode = () => {
        // console.log('hi')
        DateTimePickerAndroid.open({
        value: date,
        onChange:onChangeDate,  
        mode: 'date'
        })
    };
    
    const handelSignup = (credentials, setSubmitting) => {
        
        //TODO:
        const url = 'https://whispering-headland-00232.herokuapp.com/user/signup';
        
        axios
        .post(url, credentials)
        .then((response) => {
            const result = response.data;
            const {message, status, data} = result;

            if(status !== 'SUCCESS'){
                handelMessage(message, status);
            }
            else{
                presistLogin({...data}, message, status)
            }
            setSubmitting(false);
        })
        .catch(error => {
            // navigation.navigate('Welcome');
            handelMessage("An error occurred ", )
            setSubmitting(false)
            console.log(error.JSON());
        })
        
    }

    const presistLogin = (credentials, message, status) => {
        AsyncStorage.setItem('asali', JSON.stringify(credentials))
        .then(() => {
            handleMessage(message, status);
            setStoredCredentials(credentials)
        })
        .catch(error => {
            console.log(error)
            handleMessage('Presisting login failed')
        })
    };
    const handleMessage = (message, type='FAILED') => {
        setMessage(message);
        setMessageType(type);
    }


    return (
        <StyledContainer>
            <StatusBar style='dark'/>
            <InnerContainer>
                <PageLogo resizeMode='cover' source={require('../assets/logos/logo.png')} />
                <SubTitle>Account Sign up</SubTitle>
                
                <Formik
                    initialValues={{fullName:'', email:'', birthdate:'', password:'', confirmPassword:''}}
                    onSubmit={(values, {setSubmitting}) => {
                        values = {...values, birthdate:date.toDateString()}
                        if(
                            values.fullName == '' ||
                            values.email == '' || 
                            values.password == '' ||
                            values.confirmPassword == ''
                        ){
                            handelMessage('Please fill all the fields')
                            setSubmitting(false)
                        }
                        else if(values.password != values.confirmPassword){
                            handelMessage('Make sure that the password and the cofirmed one are the same')
                            setSubmitting(false)
                        }
                        else{
                            handelSignup(values, setSubmitting);
                        }
                        console.log(values);
                    }}
                >
                {
                    ({handleChange, handleBlur, handleSubmit, values, isSubmitting}) =>
                        (                    
                        <StyledFormArea>
                            <MyTextInput 
                            label="Full Name"
                            icon="person"
                            placeholder="Ashraf Habromman"
                            onChangeText={handleChange('fullName')}
                            onBlur={handleBlur('fullName')}
                            value={values.fullName}
                            />

                            <MyTextInput 
                            label="Email Address"
                            icon="mail"
                            placeholder="someone@gmail.com"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                            />
                            <TouchableOpacity onPress={showMode}>
                                <MyTextInput 
                                value={date ? date.toDateString():''}
                                label="Birthdate"
                                icon="calendar"
                                placeholder="YYYY-MM-DD"
                                onChangeText={handleChange('birthdate')}
                                onBlur={handleBlur('birthdate')}
                                
                                editable={false}
                                />
                            </TouchableOpacity>
                            

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
                            <MyTextInput 
                            label="Confirm Password"
                            icon="lock"
                            placeholder='* * * * * * *'
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                            secureTextEntry={hideConfirmPassword}
                            isPassword={true}
                            hidePassword={hideConfirmPassword}
                            setHidePassword={setHideConfirmPassword}
                            />

                            <MsgBox type={messageType}> {message} </MsgBox>

                            {!isSubmitting && <StyledButton onPress={handleSubmit}>
                                <ButtonText>Sign up</ButtonText>
                            </StyledButton>}
                            {isSubmitting && <StyledButton disabled={true}>
                                <ActivityIndicator size='large' color={tertiary}/>
                            </StyledButton>}

                            <ExtraView>
                                <ExtraText>Already have an account? </ExtraText>
                                <TextLink onPress={() => navigation.navigate('Login')}>
                                    <TextLinkContent>Log in</TextLinkContent>
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



export default Signup;