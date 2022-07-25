import React from 'react';
//navigation 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//account
import AccountScreen from './../screens/accountScreen';
//edit account
import EditAccountScreen from '../screens/editAccountScreen';

//colors
import { Colors } from '../components/styles'

// Credentials context

const Stack = createNativeStackNavigator();

const { primary_1, darkPrimary, secondary, tertiary } = Colors
const AccountAndEditAccountNav = () => {
    return (

            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent'
                        
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                }}
                initialRouteName='AccountScreen'
            >
                <Stack.Screen name='AccountScreen' component={AccountScreen} />
                <Stack.Screen name='EditAccountScreen' component={EditAccountScreen}/>            
                </Stack.Navigator>

    );
}


export default AccountAndEditAccountNav;