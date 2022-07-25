

import React from 'react';
import { useState } from 'react';
import { StyleSheet, View,Image, Text, } from 'react-native';

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
    EvilIcons
}
    from 'react-native-vector-icons';

import { SafeAreaView } from 'react-native-safe-area-context';

import StarRating from './starRarting';

const { primary_1, darkPrimary, secondary, tertiary, brandTitle, brandColor } = Colors;


export default function BusinessCard(props) {

    const businessName = props.businessName;  
    const businessDescription = props.businessDescription;
    const rating = props.rating;
    const reviews = props.reviews;
    const businessImage = props.businessImage

    return (
        <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
                <Image
                    source={require('../assets/homeImages/resturant.jpg')}
                    resizeMode='cover'
                    style={styles.cardImg}
                />
            </View>
            <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{businessName}</Text>
                <StarRating rating={rating} reviews={reviews} />
                <Text style={styles.cardDetalils}>{businessDescription}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center'
    },

    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },

    cardImgWrapper: {
        flex: 1
    },

    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },

    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#333',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: '#fff',
    },

    cardTitle: {
        fontWeight: 'bold'
    },
    cardDetalils: {
        fontSize: 12,
        color: '#444',
    }
});