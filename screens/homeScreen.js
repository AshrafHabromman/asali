import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
    ScrollView,
    Dimensions,
    TextInput,
    Modal,
    
} from "react-native";

import DropDownPicker from 'react-native-dropdown-picker';
import Checkbox from 'expo-checkbox';
import { Rating, } from 'react-native-ratings';

import Swiper from "react-native-swiper";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BusinessCard from "../components/businessCard";
import StarRating from "../components/starRarting";
import { Colors } from '../components/styles'
import { businessesTry } from "../data";

const { primary_1, darkPrimary, secondary, tertiary } = Colors
const { width, height } = Dimensions.get("window");

import { reviewsTry } from "../data";

import {
    EvilIcons,
    FontAwesome,
    MaterialCommunityIcons,
    Ionicons,
    MaterialIcons
}
    from 'react-native-vector-icons';
import ReviewsScreen from "./reviewsScreen";

const Tab = createMaterialTopTabNavigator();

// const businessName = props.businessName;  
// const businessDescription = props.businessDescription;
// const rating = props.rating;
// const reviews = props.reviews;



const HomeScreen = ({ navigation }) => {

    const [filterVisible, setFilterVisible] = useState(false);
    const [numOfStars, setNumOfStars] = useState(4)
    const [isSelectedPositive, setSelectionPositive] = useState(false);
    const [isSelectedNegative, setSelectionNegative] = useState(false);
    const [isSelectedNeutral, setSelectionNeutral] = useState(false);

    const [catergories, setCatergories] = useState([
        {label:'Resturants', value: 'resturants'},
        {label:'Drinks', value: 'drinks'},
        {label:'Markets', value: 'markets'},
        {label:'Delivery', value: 'delivery'},
        {label:'Hotels', value: 'hotels'},
        {label:'Contractors', value: 'contractors'}, 
    ])

    const [categoryValue, setCategoryValue] = useState(null);
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [trendy, setTrendy] = useState(false)
    const [recentOrOldest, setRecentOrOldest] = useState(true)

    //TODO
    // reviews 
    // return look like    
    // {
    //     id:1,
    //     businessName: 'Amazing food place',
    //     userName : 'Ashraf Habromman',
    //     useImage: '',
    //     rating: 4, 
    //     date: '3-3-2020' 
    //     reviewText: "good place >>>>  ",
    //     images :[
    //         {
    //             id:11,
    //             imageSource:require('./assets/homeImages/clothes.jpg'),
    //         },
    //         {
    //             id:22,
    //             imageSource:require('./assets/homeImages/supermarket.jpg')
    //         },

    //     ],
    //      usefullCount: 5,
    //      coolCount: 4,
    //      funnyCount: 4,
    // usefullFlag: true,
    // coolFlag: false,
    // funnyFlag: true
    // }
    const [reviews, setReviews] = useState(/* array of reviews*/)

    return (
        <ScrollView style={styles.container}>
            <View style={styles.sliderContainer}>
                <Swiper height={200} autoplay activeDotColor={secondary}>
                    <View style={styles.slide}>
                        <Image
                            source={require('../assets/homeImages/resturant.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../assets/homeImages/supermarket.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                    <View style={styles.slide}>
                        <Image
                            source={require('../assets/homeImages/clothes.jpg')}
                            resizeMode="cover"
                            style={styles.sliderImage}
                        />
                    </View>
                </Swiper>
            </View>

            <TouchableOpacity 
                style={styles.searchBox}
                onPress ={ () => {navigation.navigate('SearchNav')}}
            >
                <TextInput
                    placeholder='search'
                    editable={false}
                    onChangeText={(value) => { console.log(value) }}
                    onFocus={() => { console.log('hii') }}
                    onPressIn={() => { console.log('hii') }}
                ></TextInput>
            </TouchableOpacity>

            <View style={{ marginVertical: 20 }}>
                <View style={styles.categoryContainer}>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('BusinessesScreen', { headerTitle: 'Resturants', businessesTry: businessesTry } ) }}>
                        <View style={styles.categoryIcon}>
                            <Ionicons name='ios-restaurant' size={35} color={secondary} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('BusinessesScreen', { headerTitle: 'Markets', businessesTry: businessesTry }) }}>
                        <View style={styles.categoryIcon}>
                            <MaterialIcons name='local-grocery-store' size={35} color={secondary} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('BusinessesScreen', { headerTitle: 'Drinks', businessesTry: businessesTry }) }}>
                        <View style={styles.categoryIcon}>
                            <MaterialCommunityIcons name='food-fork-drink' size={35} color={secondary} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.categoryContainer}>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('BusinessesScreen', { headerTitle: 'Delivery', businessesTry: businessesTry }) }}>
                        <View style={styles.categoryIcon}>
                            <MaterialIcons name='delivery-dining' size={35} color={secondary} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('BusinessesScreen', { headerTitle: 'Hotels', businessesTry: businessesTry }) }}>
                        <View style={styles.categoryIcon}>
                            <MaterialIcons name='hotel' size={35} color={secondary} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('BusinessesScreen', { headerTitle: 'More', businessesTry: businessesTry }) }}>
                        <View style={styles.categoryIcon}>
                            <MaterialIcons name='more-horiz' size={35} color={secondary} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View style={{ height: height - 80 }}>
                    <Tab.Navigator
                        tabBarOptions={{
                            indicatorStyle: {
                                backgroundColor: tertiary,
                            },
                        }}
                        style={styles.cardsWrapper}
                        initialRouteName="Feed"
                        screenOptions={{
                            tabBarActiveTintColor: tertiary,
                            tabBarLabelStyle: { fontSize: 12 },
                            tabBarStyle: {},
                        }}
                    >
                        <Tab.Screen
                            name="Followings"
                            component={Followings}
                            options={{ tabBarLabel: 'Followings' }}
                        />
                        <Tab.Screen
                            name="Favoraties"
                            component={Favoraties}
                            options={{ tabBarLabel: 'Favoraties' }}
                        />
                    </Tab.Navigator>
                </View> */}
            <Modal
                presentationStyle='overFullScreen'
                visible={filterVisible}
                transparent={true}
                animationType='fade'
            >
                <View style={styles.centeredView} >
                    <View style={styles.modalView} >
                        <View style={{ position: 'relative', left:'92%', width: '10%'}}>
                            <EvilIcons name='close-o' size={30} onPress={()=>{setFilterVisible(false)}}/>
                        </View>
                        
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }}>
                            
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold',  }}>Filter Reviews</Text>
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
                                    onFinishRating={(value) => {console.log(value); setNumOfStars(value)}}
                                    style={{ borderRadius: 5, }}
                                />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' , }}>
                                <Checkbox
                                    value={isSelectedPositive}
                                    onValueChange={()=> setSelectionPositive(!isSelectedPositive)}
                                    color={secondary}
                                />
                                <Text style={{}}>Positive</Text>

                                <Checkbox
                                    value={isSelectedNeutral}
                                    onValueChange={()=>setSelectionNeutral(!isSelectedNeutral)}
                                    color={secondary}
                                />
                                <Text>Neutral</Text>

                                <Checkbox
                                    value={isSelectedNegative}
                                    onValueChange={()=>setSelectionNegative(!isSelectedNegative)}
                                    color={secondary}
                                />  
                                <Text>Negative</Text>

                            </View>
                            <View style={{ flex: 1, }}>
                                <DropDownPicker
                                    // multiple={true} 
                                    open={dropDownOpen}
                                    value={categoryValue}
                                    items={catergories}
                                    setOpen={setDropDownOpen}
                                    setValue={setCategoryValue}
                                    setItems={setCatergories}
                                    translation={{
                                        PLACEHOLDER: "Select Category"
                                    }}
                                    dropDownDirection="bottom"
                                    stickyHeader={true}
                                    textStyle={{
                                        fontSize: 15,
                                    }}
                                    labelStyle={{
                                        // color: secondary
                                    }}
                                    style={{
                                        // backgroundColor: secondary
                                        borderColor: secondary,
                                        borderWidth: 2,
                                        opacity: 1,
                                        paddingHorizontal:18,
                                      }}
                                    onChangeValue={(value) => {
                                        console.log(value);
                                    }}
                                />
                            </View>
                            <View style={{flex: 1, borderColor: secondary, borderRadius: 155, borderWidth:2, justifyContent: 'center', paddingHorizontal:18, backgroundColor: trendy? secondary : '#fff',marginVertical :18}}>
                                <TouchableOpacity  onPress={() => {setTrendy(!trendy); } }>
                                        <Text style={{fontSize: 15, fontWeight: '400' }}> Tendy Reviews </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row' }}>
                                <View style={{flex:1 , borderColor: secondary, borderRadius: 155, borderWidth:2, justifyContent: 'center', paddingHorizontal:18, backgroundColor: recentOrOldest ? secondary : '#fff' }}>
                                    <TouchableOpacity  onPress={() => {setRecentOrOldest(true); } }>
                                            <Text style={{fontSize: 15, fontWeight: '400' }}>Recent</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex: 1, borderColor: secondary, borderRadius: 155, borderWidth:2, justifyContent: 'center', paddingHorizontal:18, backgroundColor: !recentOrOldest ? secondary : '#fff'}}>
                                    <TouchableOpacity  onPress={() => {setRecentOrOldest(false); } }>
                                            <Text style={{fontSize: 15, fontWeight: '400' }}>Oldest </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {/* <View style={{flex: 0.7, borderColor: secondary, borderRadius: 155, borderWidth:2, justifyContent: 'center', paddingHorizontal:18,}}>
                                <TouchableOpacity  onPress={() => { setFilterVisible(false)} }>
                                        <Text style={{fontSize: 15, fontWeight: '400' }}> Tendy Reviews </Text>
                                </TouchableOpacity>
                            </View> */}
                            
                        </View>
                        
                    </View>
                </View>

            </Modal>


            <TouchableOpacity style={styles.button} onPress={() => { setFilterVisible(true) }}>
                <Text style={styles.buttonText}>Filter Reviews</Text>
            </TouchableOpacity>

            <ReviewsScreen navigation={navigation} reviewsProp={reviewsTry} />


        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
        // backgroundColor: 'red'
    },
    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },
    wrapper: {

    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginVertical: 15,
        // marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center'
    },
    categoryIcon: {
        borderwidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        backgroundColor: tertiary,
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: secondary,
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
    },
    searchBox: {
        // position: 'absolute',
        marginTop: Platform.OS === 'ios' ? 20 : 20,
        flexDirection: "row",
        backgroundColor: '#fff',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    button: {
        width: '90%',
        height: 55,
        padding: 3,
        // marginTop: 20,
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 2.5,
        borderStyle: 'dashed',
        borderColor: secondary,
        // backgroundColor: tertiary
        
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: secondary
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        
    },
    modalView: {
        width: '90%',
        height: '50%',
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
})

export default HomeScreen;