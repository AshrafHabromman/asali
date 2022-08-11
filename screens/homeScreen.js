
import React from "react";
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
    ScrollView,
    Dimensions,
    TextInput
} from "react-native";

import Swiper from "react-native-swiper";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BusinessCard from "../components/businessCard";
import StarRating from "../components/starRarting";
//colors
import { Colors } from '../components/styles'

import { businesses } from "../data";

const { primary_1, darkPrimary, secondary, tertiary } = Colors

const { width, height } = Dimensions.get("window");

import {
    EvilIcons,
    FontAwesome,
    MaterialCommunityIcons,
    Ionicons,
    MaterialIcons
}
    from 'react-native-vector-icons';

const Tab = createMaterialTopTabNavigator();

// const businessName = props.businessName;  
// const businessDescription = props.businessDescription;
// const rating = props.rating;
// const reviews = props.reviews;

function Followings() {
    return (
        <ScrollView nestedScrollEnabled={true}>
            {}
            <BusinessCard 
                businessName='Amazing food place'
                businessDescription='Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla'
                rating={4}
                reviews={54}
            />
        </ScrollView>
    );
}

function Favoraties() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notifications!</Text>
        </View>
    );
}

function ProfileScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
            <Text>Profile!</Text>
        </View>
    );
}

const HomeScreen = ({ navigation }) => {

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

            <View style={styles.searchBox}>
                <TextInput
                    placeholder='search'

                    onChangeText={(value) => { console.log(value) }}
                    onFocus={() => { console.log('hii') }}
                    onPressIn={() => { console.log('hii') }}
                ></TextInput>
            </View>
                <View style={styles.categoryContainer}>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('BusinessesScreen', { headerTitle: 'Resturants', businesses: businesses}) }}>
                        <View style={styles.categoryIcon}>
                            <Ionicons name='ios-restaurant' size={35} color={secondary} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('BusinessesScreen', { headerTitle: 'Markets', businesses: businesses }) }}>
                        <View style={styles.categoryIcon}>
                            <MaterialIcons name='local-grocery-store' size={35} color={secondary} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('BusinessesScreen', { headerTitle: 'Drinks', businesses: businesses }) }}>
                        <View style={styles.categoryIcon}>
                            <MaterialCommunityIcons name='food-fork-drink' size={35} color={secondary} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.categoryContainer}>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('BusinessesScreen', { headerTitle: 'Delivery', businesses: businesses }) }}>
                        <View style={styles.categoryIcon}>
                            <MaterialIcons name='delivery-dining' size={35} color={secondary} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('BusinessesScreen', { headerTitle: 'Hotels', businesses: businesses }) }}>
                        <View style={styles.categoryIcon}>
                            <MaterialIcons name='hotel' size={35} color={secondary} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { navigation.navigate('BusinessesScreen', { headerTitle: 'More', businesses: businesses }) }}>
                        <View style={styles.categoryIcon}>
                            <MaterialIcons name='more-horiz' size={35} color={secondary} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ height: height - 80 }}>
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
                </View>

        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginBottom: 70,
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
        marginTop: 15,
        marginBottom: 10,
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
})

export default HomeScreen;