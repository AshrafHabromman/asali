import React from 'react';
import { useState } from 'react';
import { StyleSheet, View,Image, Text, TouchableOpacity, } from 'react-native';
import { Avatar } from 'react-native-paper';
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

import StarRating from './starRarting';

const { primary_1, darkPrimary, secondary, tertiary, brandTitle, brandColor } = Colors;



export default function ReviewCard(props) {

    const businessName = props.businessName;  
    const userName = props.userName;  
    const reviewText = props.reviewText;
    const rating = props.rating;
    const reviews = props.reviews;
    const businessImages = props.businessImages;
    const coolCount = props.coolCount;
    const funnyCount = props.funnyCount;
    const usefulCount = props.usefulCount;

    return (
        <View style={styles.card}>
            <View style={styles.cardTitle}>
                <Avatar.Image 
                    style={{marginRight:10}}
                    source={require('../assets/logos/logo.png')}
                    size={45}
                />
                <Text style={{width:'85%', }}>
                    <Text style={styles.userName}>{userName}</Text>
                    <Text style={{fontWeight:'300'}}> has reviewed </Text>
                    <Text style={styles.businessName}>{businessName}</Text>
                </Text>
            </View>
            <View style={{ flexDirection:'row',}}>
                <StarRating rating={4}/>
                <Text>. 12-05-2022</Text>
            </View>
            <View style={styles.reviewText}>
                <Text >
                    {reviewText}
                </Text>
            </View>
        </View>
    )
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
        // height: 100,
        flex:1,
        width:'95%',
        marginVertical: 10,
        padding:15,
        alignSelf: 'center',
        alignItems: 'flex-start',
        shadowColor: '#888',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        borderColor: '#333',
        borderRadius:5,
        borderBottomWidth: 1,
        // borderWidth: 1
        // backgroundColor: tertiary
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
        // flex: 2,
        padding: 10,
        borderColor: '#333',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: '#fff',
    },

    cardTitle: {
        // flex:1,
        flexDirection: 'row',
        // margin:5,
        // padding: 5,
        justifyContent: 'space-between',
        // paddingRight: 20,
        // backgroundColor: 'red'
        
    },
    cardDetalils: {
        fontSize: 12,
        color: '#444',
    },
    userName:{

        fontSize: 16,
        fontWeight: '600'
    },
    businessName:{
        // flex: 1,
        // flexShrink: 'inherit',
        fontSize: 16,
        fontWeight: '600',
        
    },
    reviewText:{
        // flex:1,
        // backgroundColor: 'red'
    }
});