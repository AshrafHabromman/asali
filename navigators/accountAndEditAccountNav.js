import React from 'react';
//navigation 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//account
import AccountScreen from './../screens/accountScreen';
//edit account
import EditAccountScreen from '../screens/editAccountScreen';
import GalleryScreen from '../screens/galleryScreen';
import ReviewsScreen from '../screens/reviewsScreen';
import BusinessesScreen from '../screens/businessesScreen';
import BusinessScreen from '../screens/businessScreen';
//colors
import { Colors } from '../components/styles'

// Credentials context

const Stack = createNativeStackNavigator();

const { primary_1, darkPrimary, secondary, tertiary } = Colors
const AccountAndEditAccountNav = ({navigation}) => {
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
                <Stack.Screen name='GalleryScreen' component={GalleryScreen} /> 
                <Stack.Screen name='ReviewsScreen' component={ReviewsScreen} />        
                <Stack.Screen name='BusinessesScreen' component={BusinessesScreen} />  
                <Stack.Screen name='BusinessScreen' component={BusinessScreen} />     
            </Stack.Navigator>

    );
}


export default AccountAndEditAccountNav;