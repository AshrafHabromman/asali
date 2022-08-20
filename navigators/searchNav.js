
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
import SearchBusinessScreen from '../screens/searchBusinessScreen';
import SearchResultsScreen from '../screens/searchResultsScreen';
export default function SearchNav({ navigation }) {

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
                    headerShown: false
                }}
            >
                <Stack.Screen name='SearchBusinessScreen' component={SearchBusinessScreen} />
                <Stack.Screen name='SearchResultsScreen' component={SearchResultsScreen} />

            </Stack.Navigator>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});