import React from 'react';
import { useState, useRef, useMemo } from 'react';
import { StyleSheet, View, ScrollView, Image, Text, TouchableOpacity, Linking, Dimensions, FlatLis, Modal } from 'react-native';
import { Rating, } from 'react-native-ratings';
import DropDownPicker from 'react-native-dropdown-picker';
import Checkbox from 'expo-checkbox';

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
import ReviewsScreen from './reviewsScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { reviewsTry, images } from '../data';

const Tab = createMaterialTopTabNavigator();

const { primary_1, darkPrimary, secondary, tertiary, brandTitle, brandColor } = Colors;

const { width, height } = Dimensions.get("window");




const days = [
    {
        day: 'Friday',
        openFrom: '08:00 AM',
        openTo: '08:00 PM',
    },
    {
        day: 'Saturday',
        openFrom: '08:00 AM',
        openTo: '08:00 PM',
    },
    {
        day: 'Sunday',
        openFrom: '08:00 AM',
        openTo: '08:00 PM',
    },
    {
        day: 'Monday',
        openFrom: '08:00 AM',
        openTo: '08:00 PM',
    },
    {
        day: 'Tuesday',
        openFrom: '08:00 AM',
        openTo: '08:00 PM',
    },
    {
        day: 'Wednesday',
        openFrom: '08:00 AM',
        openTo: '08:00 PM',
    },
    {
        day: 'Thursday',
        openFrom: '08:00 AM',
        openTo: '08:00 PM',
    },

]

export default function BusinessScreen({ route, navigation }) {

    const [filterVisible, setFilterVisible] = useState(false);
    const [numOfStars, setNumOfStars] = useState(4)
    const [isSelectedPositive, setSelectionPositive] = useState(false);
    const [isSelectedNegative, setSelectionNegative] = useState(false);
    const [isSelectedNeutral, setSelectionNeutral] = useState(false);
    
    const [services, setServices] = useState([
        { label: 'Vitrified Glass', value: 'Vitrified Glass' },
        { label: 'Melamine', value: 'Melamine' },
        { label: 'Polycarbonate', value: 'Polycarbonate' },
        { label: 'Earthenware', value: 'Earthenware' },
        { label: 'Stoneware', value: 'Stoneware' },
        { label: 'Wooden', value: 'Wooden' },
        { label: 'Paper', value: 'Paper' }
    ])

    const [serviceValue, setServiceValue] = useState(null);
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [trendy, setTrendy] = useState(false)
    const [recentOrOldest, setRecentOrOldest] = useState(true);


    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['25%', '57%'], []);

    const [open, setOpen] = useState(true);     // is the business open now ? 
    const [following, setFollowing] = useState(false);  // is user follow tjis business ? 

    const handleFollowing = () => {
        setFollowing(!following)
    }

    const pressCall = () => {
        const url = 'tel:0595429423'
        Linking.openURL(url)
    }
    const goWebsite = () => {
        const url = 'https://www.pizzatime.co.uk/?locale=en-GB'
        Linking.openURL(url)
    }

    const businessName = route.params.businessName;
    const businessID = route.params.businessName;

    const BusinessReviewsScreen = (props) => (
        <View style={{ flex: 1, flexDirection: 'column' }}>
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
                            <View style={{ flex: 1, }}>
                                <DropDownPicker
                                    // multiple={true} 
                                    open={dropDownOpen}
                                    value={serviceValue}
                                    items={services}
                                    setOpen={setDropDownOpen}
                                    setValue={setServiceValue}
                                    setItems={setServices}
                                    translation={{
                                        PLACEHOLDER: "Select Service"
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
                                        paddingHorizontal: 18,
                                    }}
                                    onChangeValue={(value) => {
                                        console.log(value);
                                    }}
                                />
                            </View>
                            <View style={{ flex: 1, borderColor: secondary, borderRadius: 155, borderWidth: 2, justifyContent: 'center', paddingHorizontal: 18, backgroundColor: trendy ? secondary : '#fff', marginVertical: 18 }}>
                                <TouchableOpacity onPress={() => { setTrendy(!trendy); }}>
                                    <Text style={{ fontSize: 15, fontWeight: '400' }}> Tendy Reviews </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 1, borderColor: secondary, borderRadius: 155, borderWidth: 2, justifyContent: 'center', paddingHorizontal: 18, backgroundColor: recentOrOldest ? secondary : '#fff' }}>
                                    <TouchableOpacity onPress={() => { setRecentOrOldest(true); }}>
                                        <Text style={{ fontSize: 15, fontWeight: '400' }}>Recent</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 1, borderColor: secondary, borderRadius: 155, borderWidth: 2, justifyContent: 'center', paddingHorizontal: 18, backgroundColor: !recentOrOldest ? secondary : '#fff' }}>
                                    <TouchableOpacity onPress={() => { setRecentOrOldest(false); }}>
                                        <Text style={{ fontSize: 15, fontWeight: '400' }}>Oldest </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>


                        </View>
                    </View>
                </View>
            </Modal>

            <View style={{flexDirection: 'row', height: 50, justifyContent: 'center', marginHorizontal: 15, marginTop: 15, padding: 10, borderRadius:4, borderColor: '#aaa', borderWidth: 1, marginBottom:8  }}>
                <Text style={{ flex: 10, fontSize: 20 }}>Reviews</Text>
                <FontAwesome name='sliders' size={27} style={{ flex: 1, alignSelf: 'center', }} onPress={() => { setFilterVisible(true) }} />
            </View>

            <ReviewsScreen reviewsProp={reviewsTry}  {...props}/>
        </View>
    );

    return (
        <BottomSheetModalProvider>

            <BottomSheetModal
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
            // onChange={handleSheetChanges}
            >
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20, marginBottom: 5, }}>
                    <AntDesign name='closecircleo' size={25} onPress={() => { bottomSheetRef.current?.dismiss(); }} />
                </View>

                {days.map((day) =>
                (
                    <View style={styles.dayAndTimeWrapper}>
                        <Text>{day.day}</Text>
                        <View style={styles.openFromTo}>
                            <Text>{day.openFrom} - </Text>
                            <Text>{day.openTo}</Text>
                        </View>
                    </View>
                )
                )}
            </BottomSheetModal>

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
                                source={require('../assets/homeImages/resturant.jpg')}
                                resizeMode="cover"
                                style={styles.sliderImage}
                            />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                source={require('../assets/homeImages/resturant.jpg')}
                                resizeMode="cover"
                                style={styles.sliderImage}
                            />
                        </View>
                    </Swiper>

                    <View style={styles.businessInfoWrapper}>
                        <View style={styles.businessTitleWrapper}>
                            <Text style={styles.businessName}>{businessName}</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.ratingWrapper}>
                                <StarRating rating={3} reviews={34} />
                            </View>
                            <TouchableOpacity
                                onPress={() => { bottomSheetRef.current?.present(); }}
                                style={[styles.openWrapper, { backgroundColor: (open) ? 'rgba(130, 255, 130, 0.7)' : 'rgba(255, 130, 130, 0.7)', }]}>
                                <Text> {open ? '' : 'Not '}Open Now</Text>
                                <AntDesign name='arrowright' size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


                <View style={styles.followReviewWrapper}>

                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('WriteReviewScreen', { businessName: businessName }) }}>
                        <Text style={styles.buttonText}>Review</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: (following) ? secondary : 'transparent' }]}
                        onPress={handleFollowing}
                    >
                        <Text
                            style={[styles.buttonText, { color: (following) ? 'white' : secondary }]}
                        >
                            {following ? 'Following' : 'Follow'}
                        </Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.followReviewWrapper}>
                    <TouchableOpacity style={styles.icon} onPress={pressCall}>
                        <Ionicons name='call-outline' size={20} />
                        <Text style={{ fontSize: 13 }}>Call</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon}>
                        <Ionicons name='location-outline' size={20} />
                        <Text style={{ fontSize: 13 }} >Location</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon} onPress={() => { navigation.navigate('GalleryScreen', { images: images }) }}>
                        <Ionicons name='images-outline' size={20} />
                        <Text style={{ fontSize: 13 }}>Photos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon} onPress={goWebsite} >
                        <Ionicons name='link-outline' size={20} />
                        <Text style={{ fontSize: 13 }}>Website</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 25, height: height , marginHorizontal: 3 }}>
                    <Tab.Navigator
                        tabBarOptions={{
                            indicatorStyle: {
                                backgroundColor: tertiary,
                            },
                        }}
                        screenOptions={{
                            tabBarActiveTintColor: tertiary,
                            tabBarLabelStyle: { fontSize: 12 },
                            tabBarStyle: { backgroundColor: 'white', },
                        }}
                    >
                        <Tab.Screen name='Info' component={InfoScreen} />
                        <Tab.Screen name='Reviews' component={BusinessReviewsScreen} />
                    </Tab.Navigator>
                </View>
{/* 
                <View>
                    <Text>
                        Hello
                    </Text>
                </View> */}

            </ScrollView>
        </BottomSheetModalProvider>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginBottom: 60
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderContainer: {
        height: 200,
        width: '100%',
        // marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        // borderRadius: 8,
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        // borderRadius: 8,

    },
    businessInfoWrapper: {
        position: 'absolute',
        bottom: '5%',
        // left: 30,
        marginHorizontal: 30
    },
    businessTitleWrapper: {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    businessName: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
    },
    ratingWrapper: {
        // left: 53,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        width: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderRadius: 4,
        paddingHorizontal: 10
    },
    openWrapper: {
        flex: 1,
        flexDirection: 'row',
        width: '50%',
        borderRadius: 4,
        paddingHorizontal: 10
    },
    dayAndTimeWrapper: {
        // flex:1,
        flexDirection: 'row',
        alignSelf: 'center',
        width: '85%',
        backgroundColor: 'rgba(240, 240, 240, 0.25)',
        borderRadius: 12,
        padding: 10,
        marginVertical: 3,
    },
    openFromTo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    followReviewWrapper: {
        // flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        padding: 8,
        marginTop: 15,
        width: '100%',
        height: 55,
        backgroundColor: 'rgba(220, 220, 220, 0.25)',
    },
    button: {
        width: '45%',
        height: '100%',
        padding: 3,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: secondary,
        // backgroundColor: tertiary
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: secondary
    },
    welcomeMes: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: '500',
    },
    icon: {
        width: '20%',
        height: '100%',
        padding: 3,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        // borderRadius: 150,
        // borderWidth: 1,
        borderColor: secondary,
        // backgroundColor: tertiary
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
});