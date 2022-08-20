import React from 'react';
import { useState, useRef, useMemo } from 'react';
import { StyleSheet, View, ScrollView, Image, Text, TouchableOpacity, Linking, Dimensions, FlatList } from 'react-native';


import {
    Colors,
} from '../components/styles';

import {
    Ionicons,
    MaterialCommunityIcons,
    Fontisto,
    SimpleLineIcons,
    FontAwesome,
    Octicons,
    EvilIcons,
    AntDesign
}
    from 'react-native-vector-icons';

import BottomSheet, {
    BottomSheetModal,
    BottomSheetModalProvider
} from '@gorhom/bottom-sheet';

import { SafeAreaView } from 'react-native-safe-area-context';

import Swiper from 'react-native-swiper';
import { VictoryChart, VictoryPie, VictoryBar, VictoryAxis } from "victory-native";
import StarRating from '../components/starRarting';
// import GalleryScreen from './galleryScreen';
import InfoScreen from './infoBusinessScreen';
import ReviewCard from '../components/reviewCard';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const { primary_1, darkPrimary, secondary, tertiary, brandTitle, brandColor } = Colors;

const { width, height } = Dimensions.get("window");

function ReviewsScreen({route, navigation, reviewsProp}) {

    // console.log(reviewsProp)

    const reviews = reviewsProp != null ? reviewsProp:  route.params.reviews

    return (
        <View style={styles.container}>
            <FlatList 
                // style={{ flex: 1}}
                nestedScrollEnabled={true}
                data={reviews}
                renderItem={({item}) => <ReviewCard item={item} navigation={navigation}/>}
                keyExtractor={item => item.id}
                
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom:60,
    },
    wrapper: {
        // display: 'flex',
        // flexDirection: 'row',
        alignSelf: 'center',
        marginTop:2,
        marginBottom: 65
    },


});

export default ReviewsScreen;