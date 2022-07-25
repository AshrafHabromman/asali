import React from 'react';
import { useState, useRef, useMemo } from 'react';
import { StyleSheet, View, ScrollView, Image, Text, TouchableOpacity, Linking, Dimensions } from 'react-native';

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
import InfoScreen from './infoBusinessScreen';
import ReviewCard from '../components/reviewCard';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

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

    const { businessID } = route.params;

    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['25%', '57%'], []);

    const [open, setOpen] = useState(true);
    const [following, setFollowing] = useState(false);

    const handleFollowing = () => {
        setFollowing(!following)
    }

    const pressCall = () => {
        const url = 'tel:0595429423'
        Linking.openURL(url)
    }



    function Reviews() {
        return (
            <ScrollView 
                style={{ flex: 1}}
                nestedScrollEnabled={true}
            >
                <ReviewCard  
                businessName='Amazing ' 
                userName='Ashraf rumman'
                reviewText= "If you decide to eat here, just be aware it is going to take about 2 hours from beginning to end. We have tried it multiple times, because I want to like it! I have been to it's other locations in NJ and never had a bad experience. The food is good, but it takes a very long time to come out. The waitstaff is very young, but usually pleasant. We have just had too many experiences where we spent way too long waiting. We usually opt for another diner or restaurant on the weekends, in order to be done quicker."
                />
                <ReviewCard  
                businessName='Amazing food place' 
                userName='Ashraf Habromman'
                reviewText= " If you decide to eat here, just be aware it is going to take about 2 hours from beginning to end. We have tried it multiple times, because I want to like it! I have been to it's other locations in NJ and never had a bad experience. The food is good, but it takes a very long time to come out. The waitstaff is very young, but usually pleasant. We have just had too many experiences where we spent way too long waiting. We usually opt for another diner or restaurant on the weekends, in order to be done quicker. The waitstaff is very young, but usually pleasant. We have just had too many experiences where we spent way too long waiting. We usually opt for another diner or restaurant on the weekends, in order to be done quicker.  If you decide to eat here, just be aware it is going to take about 2 hours from beginning to end. We have tried it multiple times, because I want to like it! I have been to it's other locations in NJ and never had a bad experience. The food is good, but it takes a very long time to come out. The waitstaff is very young, but usually pleasant. We have just had too many experiences where we spent way too long waiting. We usually opt for another diner or restaurant on the weekends, in order to be done quicker. The waitstaff is very young, but usually pleasant. We have just had too many experiences where we spent way too long waiting. We usually opt for another diner or restaurant on the weekends, in order to be done quicker. "
                />
            </ScrollView>
        );
    }


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
                            <Text style={styles.businessTitle}>Pizza  Pizza Pizza Pizza Time !</Text>
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

                    <TouchableOpacity style={styles.button}>
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

                    <TouchableOpacity style={styles.icon}>
                        <Ionicons name='images-outline' size={20} />
                        <Text style={{ fontSize: 13 }}>Photos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon}>
                        <Ionicons name='link-outline' size={20} />
                        <Text style={{ fontSize: 13 }}>Website</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 25, height: height - 70, marginHorizontal: 3 }}>
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
                        <Tab.Screen name='Reviews' component={Reviews} />
                    </Tab.Navigator>
                </View>

                <View>
                    <Text>
                        Hello
                    </Text>
                </View>

            </ScrollView>
        </BottomSheetModalProvider>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 60
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
    businessTitle: {
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
});