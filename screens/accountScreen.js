
import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, ScrollView, TouchableOpacity, Text, Modal } from 'react-native';

import {
    Colors,
} from './../components/styles';

import {
    Ionicons,
    MaterialCommunityIcons,
    Fontisto,
    FontAwesome,
    EvilIcons
}
    from 'react-native-vector-icons';


import { Avatar, Title, Caption, } from 'react-native-paper';
import { Rating, } from 'react-native-ratings';
import Checkbox from 'expo-checkbox';

import ReviewsScreen from './reviewsScreen'

import { reviewsTry, images, businessesTry } from '../data';

const { primary_1, darkPrimary, secondary, tertiary, brandTitle, brandColor } = Colors;

export default function AccountScreen({ navigation, ...props }) {
    const [userName, setUserName] = useState('Ashraf habromman');
    const [userEmail, setUserEmail] = useState('ashraf@asali.com');
    const [headline, setHeadline] = useState('Food lover');
    const [lastReviewDate, setLastReviewDate] = useState('2000-5-15')
    const [bio, setBio] = useState('last review date: 2000-5-15 last review date: 2000-5-15 last review date: 2000-5-15 last review date: 2000-5-15 last review date: 2000-5-15last review date: 2000-5-15 last review date: 2000-5-15');
    const name = 'Ashraf'

    const [filterVisible, setFilterVisible] = useState(false);
    const [numOfStars, setNumOfStars] = useState(4);
    const [isSelectedPositive, setSelectionPositive] = useState(false);
    const [isSelectedNegative, setSelectionNegative] = useState(false);
    const [isSelectedNeutral, setSelectionNeutral] = useState(false);
    const [recentOrOldest, setRecentOrOldest] = useState('recent')

    return (
        <ScrollView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Avatar.Image
                        source={require('../assets/logos/logo.png')}
                        size={100}
                    />
                    <View style={{ marginLeft: 20 }}>
                        <Title style={[styles.title,
                        { marginTop: 15, marginBottom: 5 }]}
                        >
                            Ashraf Habromman
                        </Title>
                        <Caption style={styles.caption}>{headline}</Caption>
                    </View>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <MaterialCommunityIcons name='email' size={20} color={tertiary} />
                    <Text style={{ color: tertiary, marginLeft: 20 }}>{userEmail}</Text>
                </View>
                <View style={styles.row}>
                    <Fontisto name='date' size={20} color={tertiary} />
                    <Text style={{ color: tertiary, marginLeft: 20 }}> last review date: {lastReviewDate}</Text>
                </View>
                <View style={styles.row}>
                    <Text>Bio:</Text>
                    <Text style={{ color: tertiary, marginLeft: 20 }}>{bio}</Text>
                </View>
            </View>

            <View style={styles.infoBoxWrapper}>

                <TouchableOpacity 
                    style={styles.infoBox} 
                    onPress={() => { navigation.navigate('BusinessesScreen', { headerTitle: name + '\'s Followings', businessesTry: businessesTry }) }}
                >

                    <Ionicons name='heart-outline' color={secondary} size={20} />
                    <Caption > Followings | 20</Caption>
                </TouchableOpacity>



                <TouchableOpacity style={styles.infoBox} onPress={() => { navigation.navigate('GalleryScreen', { images: images }) }}>
                    <MaterialCommunityIcons name='image-multiple-outline' size={20} color={secondary} />
                    <Caption> Photos | 20</Caption>
                </TouchableOpacity>
            </View>


            <Modal
                presentationStyle='overFullScreen'
                visible={filterVisible}
                transparent={true}
                animationType='fade'
            >
                <View style={styles.centeredView} >
                    <View style={styles.modalView} >
                        <View style={{ position: 'relative', left: '92%', width: '10%' }}>
                            <EvilIcons name='close-o' size={30} onPress={() => { setFilterVisible(false) }} />
                        </View>

                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }}>

                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', }}>Filter Reviews</Text>
                            </View>
                            <View style={{ flex: 1.3, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                {/* <Text style={{fontSize: 16}}>Stars: </Text> */}
                                <Rating
                                    imageSize={30}
                                    type='custom'
                                    startingValue={4}
                                    minValue={1}
                                    ratingColor={secondary}
                                    tintColor='white'
                                    ratingBackgroundColor='transparent'
                                    onFinishRating={(value) => { console.log(value); setNumOfStars(value) }}
                                    style={{ borderRadius: 5, }}
                                />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', }}>
                                <Checkbox
                                    value={isSelectedPositive}
                                    onValueChange={() => setSelectionPositive(!isSelectedPositive)}
                                    color={secondary}
                                />
                                <Text style={{}}>Positive</Text>

                                <Checkbox
                                    value={isSelectedNeutral}
                                    onValueChange={() => setSelectionNeutral(!isSelectedNeutral)}
                                    color={secondary}
                                />
                                <Text>Neutral</Text>

                                <Checkbox
                                    value={isSelectedNegative}
                                    onValueChange={() => setSelectionNegative(!isSelectedNegative)}
                                    color={secondary}
                                />
                                <Text>Negative</Text>

                            </View>


                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 1, borderColor: secondary, borderRadius: 155, borderWidth: 2, justifyContent: 'center', paddingHorizontal: 18, backgroundColor: recentOrOldest == 'recent' ? secondary : '#fff' }}>
                                    <TouchableOpacity onPress={() => { setRecentOrOldest('recent'); }}>
                                        <Text style={{ fontSize: 15, fontWeight: '400' }}>Recent</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 1, borderColor: secondary, borderRadius: 155, borderWidth: 2, justifyContent: 'center', paddingHorizontal: 18, backgroundColor: recentOrOldest == 'oldest' ? secondary : '#fff' }}>
                                    <TouchableOpacity onPress={() => { setRecentOrOldest('oldest'); }}>
                                        <Text style={{ fontSize: 15, fontWeight: '400' }}>Oldest </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

            </Modal>

            <View style={{ flex: 1, flexDirection: 'row', height: 50, justifyContent: 'center', marginHorizontal: 15, marginTop: 15, padding: 10, borderTopEndRadius: 5, borderTopStartRadius: 5, borderColor: '#aaa', borderWidth: 1, borderBottomWidth: 0 }}>
                <Text style={{ flex: 10, fontSize: 20 }}>Reviews</Text>
                <FontAwesome name='sliders' size={27} style={{ flex: 1, alignSelf: 'center', }} onPress={() => { setFilterVisible(true) }} />
            </View>
            <ReviewsScreen reviewsProp={reviewsTry} navigation={navigation}/>

        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: tertiary,
        // borderBottomWidth: 1,
        borderTopColor: tertiary,
        // borderTopWidth: 1,
        flexDirection: 'row',
        // height: 100,
    },
    infoBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // borderRightColor: tertiary,
        // borderRightWidth:1,
        // backgroundColor: secondary,
        padding: 8,
        borderColor: '#aaa',
        borderWidth: 1,
        marginHorizontal: 15,
        borderRadius: 5,
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30
    },
    menuItemText: {
        color: tertiary,
        marginLeft: 20,
        fontWeight: '400',
        fontSize: 16,
        // lineHeight: 26
    },
    reviews: {
        // backgroundColor: primary_1,
        height: 100,
        marginVertical: 18,
        borderRadius: 5,
        marginHorizontal: 10,

    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        
    },
    modalView: {
        width: '90%',
        height: '35%',
        padding: 20,
        backgroundColor: "#eee",
        borderRadius: 10,
        shadowColor: "#111",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderWidth: 2,
        borderColor: secondary
    },

});