
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal } from "react-native";

import {
    EvilIcons,
    FontAwesome,
    MaterialCommunityIcons,
    Ionicons,
    MaterialIcons
}
    from 'react-native-vector-icons';
import { Colors, Line, MsgBox } from '../components/styles';
import { Rating, } from 'react-native-ratings';
const { primary_1, darkPrimary, secondary, tertiary } = Colors;

export default function SearchBusinessScreen(props) {

    const navigation = props.navigation

    const [catergories, setCatergories] = useState([
        { label: 'All Categories', value: 'all', icon: 'done-all' },
        { label: 'Resturants', value: 'resturants', icon: 'restaurant' },
        { label: 'Drinks', value: 'drinks', icon: 'local-cafe' },
        { label: 'Markets', value: 'markets', icon: 'local-grocery-store' },
        { label: 'Delivery', value: 'delivery', icon: 'delivery-dining' },
        { label: 'Hotels', value: 'hotels', icon: 'hotel' },
        { label: 'Contractors', value: 'contractors', icon: 'handyman' },
    ])

    const [filterVisible, setFilterVisible] = useState(false);
    const [numOfStars, setNumOfStars] = useState(4)
    const [mostReviewed, setMostReviewed] = useState(false)
    const [nearYou, setNearYou] = useState(true)

    const [chosenCategory, setChosenCategory] = useState('all')

    //  onPress={() => navigation.navigate('search')}s
    return (
        <View style={styles.constainer}>
            {/* <Text>Hello</Text> */}
            <View style={styles.searchBox}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TextInput
                        style={{ flex: 10, }}
                        placeholder='search'
                        onChangeText={(value) => { console.log(value) }}
                    // onFocus={() => { console.log('hii') }}
                    // onPressIn={() => { console.log(chosenCategory) }}
                    >
                    </TextInput>
                    <FontAwesome name='sliders' size={27} style={{ flex: 1, alignSelf: 'center', }} onPress={() => { setFilterVisible(true) }} />
                </View>
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
                            <EvilIcons name='close-o' size={30} onPress={() => { setFilterVisible(false); console.log(mostReviewed) }} />
                        </View>

                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }}>

                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', }}>Filter Businesses</Text>
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


                            <View style={{ flex: 1, borderColor: secondary, borderRadius: 155, borderWidth: 2, justifyContent: 'center', paddingHorizontal: 18, backgroundColor: mostReviewed ? secondary : '#fff', marginVertical: 18 }}>
                                <TouchableOpacity onPress={() => { setMostReviewed(!mostReviewed); }}>
                                    <Text style={{ fontSize: 15, fontWeight: '400' }}> Most Reviewed </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 1, borderColor: secondary, borderRadius: 155, borderWidth: 2, justifyContent: 'center', paddingHorizontal: 18, backgroundColor: nearYou ? secondary : '#fff' }}>
                                    <TouchableOpacity onPress={() => { setNearYou(true); }}>
                                        <Text style={{ fontSize: 15, fontWeight: '400' }}>Near you</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 1, borderColor: secondary, borderRadius: 155, borderWidth: 2, justifyContent: 'center', paddingHorizontal: 18, backgroundColor: !nearYou ? secondary : '#fff' }}>
                                    <TouchableOpacity onPress={() => { setNearYou(false); }}>
                                        <Text style={{ fontSize: 15, fontWeight: '400' }}>Any where </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>

                    </View>
                </View>

            </Modal>
            <View style={styles.catergoriesContainer}>
                {
                    catergories.map((category) => {
                        return (
                            <TouchableOpacity
                                style={[styles.catergoryItem, { backgroundColor: category.value == chosenCategory ? secondary : 'rgb(242, 242, 242)' }]}
                                onPress={() => { setChosenCategory(category.value); }}
                            >
                                <View style={styles.iconLabelCat}>
                                    <MaterialIcons name={category.icon} size={25} />
                                    <Text style={styles.categoryText}>{category.label}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>

            <TouchableOpacity style={styles.btn} onPress={() => { /*TODO*/ navigation.navigate('SearchResultsScreen'); }}>
                <Ionicons name="search-outline" color={tertiary} size={26} />
                <Text style={styles.btnText}> Search </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        marginTop: 50
        // justifyContent: 'center',
        // alignItems: 'center',
        // alignContent: 'center'
        // alignSelf: 'center'
    },
    searchBox: {
        // flex:1,
        // flexDirection:'row',
        alignSelf: 'center',
        justifyContent: 'center',
        borderColor: secondary,
        width: '80%',
        height: 50,
        paddingHorizontal: 10,
        marginBottom: 1,
        borderWidth: 1,
        borderRadius: 6,
    },
    catergoriesContainer: {
        alignItems: 'center'
    },
    catergoryItem: {
        justifyContent: 'center',
        width: '80%',
        height: 50,
        borderRadius: 6,
        borderBottomWidth: 2,
        borderColor: '#ccc'
    },
    categoryText: {
        paddingHorizontal: 10
    },
    iconLabelCat: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,

    },
    modalView: {
        width: '90%',
        height: '40%',
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

    btn: {
        flexDirection: 'row',
        width: '80%',
        height: 50,
        borderRadius: 10,
        backgroundColor: secondary,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent:'center',
        marginTop: 15,

    },
    btnText: {
        fontSize: 15,
        fontWeight: 'bold',
        // color: tertiary,
    },
    
})