
import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, ScrollView, TouchableOpacity, Text, } from 'react-native';

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

} from '../components/styles';

import {
    Ionicons,
    MaterialCommunityIcons,
    Fontisto,
    SimpleLineIcons,
    FontAwesome,
    Octicons,
    EvilIcons
}
    from 'react-native-vector-icons';

import { SafeAreaView } from 'react-native-safe-area-context';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { primary_1, darkPrimary, secondary, tertiary, brandTitle, brandColor } = Colors;

const Stack = createNativeStackNavigator();

import HomeScreen from '../screens/homeScreen';
import BusinessesScreen from '../screens/businessesScreen';
import BusinessScreen from '../screens/businessScreen';
import GalleryScreen from '../screens/galleryScreen';
import FullScreenImagesScreen from '../screens/fullScreenImagesScreen';
import WriteReviewScreen from '../screens/writeReviewScreen';
export default function HomeScreenNav({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Navigator
                initialRouteName='HomeScreen'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    // headerShown: false
                }}
            >
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='BusinessesScreen' component={BusinessesScreen} />
                <Stack.Screen name='BusinessScreen' component={BusinessScreen} />
                <Stack.Screen name='GalleryScreen' component={GalleryScreen} />
                <Stack.Screen name='FullScreenImagesScreen' component={FullScreenImagesScreen} />
                <Stack.Screen name='WriteReviewScreen' component={WriteReviewScreen}  options={({ route }) => ({ headerTitle: route.params.businessName })}/>
            </Stack.Navigator>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});