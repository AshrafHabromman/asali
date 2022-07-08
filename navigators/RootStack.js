import React from 'react';
//navigation 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//login page
import Login from '../screens/login';
//sign up page
import Signup from '../screens/signup';
//welcome
import Welcome from '../screens/welcome';

//colors
import {Colors} from '../components/styles'

// Credentials context
import {CredentialsContext} from '../components/credentialsContext';


const Stack = createNativeStackNavigator();

const {primary_1, darkPrimary, secondary, tertiary} = Colors
const LoginSignupStack = () => {
    return(
        <CredentialsContext.Consumer>
            {({storedCredentials}) => (
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                        headerStyle:{
                            backgroundColor: 'transparent'
                        },
                        headerTintColor: primary_1,
                        headerTransparent: true,
                        headerTitle:'',
                        }}
                        initialRouteName='Login'
                    >
                    {storedCredentials ? 
                        <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}}/>
                        :
                        <>
                        <Stack.Screen name='Login' component={Login} />
                        <Stack.Screen name='Signup' component={Signup} options={{headerTintColor: tertiary}}/>
                        </>
                    }
                    </Stack.Navigator>
                </NavigationContainer>
            )}
        </CredentialsContext.Consumer>
        
    );
}



export default LoginSignupStack ;