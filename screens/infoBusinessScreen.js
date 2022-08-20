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

import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import mapTemplate from './maps/webmap';

import Swiper from 'react-native-swiper';
import { VictoryChart, VictoryPie, VictoryBar, VictoryAxis } from "victory-native";
import StarRating from '../components/starRarting';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const { primary_1, darkPrimary, secondary, tertiary, brandTitle, brandColor } = Colors;

const { width, height } = Dimensions.get("window");

export default function InfoScreen() {

    let webRef = undefined;

    let businessPosition = {longitude: '-121.913', latitude:'37.361'};
    let [mapCenter, setMapCenter] = useState(businessPosition.longitude+','+businessPosition.longitude);

    
    const handleMapEvent = (event) => {
      console.log(event.nativeEvent)
      setMapCenter(event.nativeEvent.data)
    }

    const handleOnLoadMap = () => {
        webRef.injectJavaScript(`new tt.Marker().setLngLat([${parseFloat(businessPosition.longitude)}, ${parseFloat(businessPosition.latitude)}]).addTo(map)`);
    }
    
    const lolo = 9

    const services = [
        'Vitrified Glass',
        'Melamine',
        'Polycarbonate',
        'Earthenware',
        'Stoneware',
        'Wooden',
        'Paper'
    ]

    return (
        <View style={styles.info}>
            <View style={styles.bio}>
                <Text>
                    Bla Bla la Bla Bla la
                    Bla Bla la Bla Bla la
                    Bla Bla la Bla Bla la
                    Bla Bla la Bla Bla la
                    Bla Bla la Bla Bla la
                </Text>
            </View>

            <View style={styles.reviewBrief}>
                <View style={styles.reviewOverall}>
                    <Text style={{ fontWeight: '500' }}>Overall Review</Text>
                    <StarRating rating={4} reviews={39} />
                </View>
                <View style={{ width: '75%', height: '100%', }}>
                    <VictoryChart
                        height={height * 0.27}
                        width={width * 0.7}
                        tickValues={[1, 2, 3, 4, 5]}
                    >
                        <VictoryAxis />

                        <VictoryBar
                            animate={{
                                duration: 2000,
                                // onLoad: { duration: 1000 }
                            }}
                            height={height * 0.27}
                            width={width * 0.7}
                            horizontal
                            style={{
                                // flex: 1,
                                data: { fill: ({ datum }) => secondary },
                            }}
                            cornerRadius={{ top: 5, }}
                            data={[
                                { x: '1', y: 2, },
                                { x: '2', y: 3, },
                                { x: '3', y: 4, },
                                { x: '4', y: 5, },
                                { x: '5', y: lolo, },
                            ]}
                            labels={({ datum }) => datum.y}
                        />
                    </VictoryChart>
                </View>
            </View>

            <View style={styles.services}>
                <Text style={styles.serviceTitle}>
                    Services
                </Text>
                <ScrollView
                    horizontal
                    style={styles.servicesWrapper}
                >
                    {
                        services.map((service, index) => (
                            <View style={styles.service} key={index}>
                                <Text>{service}</Text>
                            </View>
                        ))
                    }

                </ScrollView>
            </View>

            <WebView
                ref={(r) => (webRef = r)}
                onMessage={handleMapEvent}
                style={styles.map}
                onLoad={handleOnLoadMap}
                originWhitelist={['*']}
                source={{ html: mapTemplate }}
                onError={(error) => { console.log(error) }}
                // androidHardwareAccelerationDisabled={true}S
                opacity={0.99}
            >

            </WebView>

        </View>
    );

}


const styles = StyleSheet.create({
    info: {
        flex: 1,
        marginBottom:60,
    },
    bio: {
        marginVertical: 15,
        padding: 18,
        backgroundColor: 'rgba(220, 220, 220, 0.25)',
    },
    reviewBrief: {
        width: '100%',
        // margin:15,
        // padding:10,
        flexDirection: 'row',
        justifyContent: 'center',
        // alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(220, 220, 220, 0.25)',
    },
    reviewOverall: {
        width: '25%',
        flexDirection: 'column',
        marginLeft: 35,
        // justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        // backgroundColor: tertiary
    },
    services: {
        marginVertical: 15,
        backgroundColor: 'rgba(220, 220, 220, 0.25)',
        padding: 20,
    },
    serviceTitle: {
        fontSize: 20,
        fontWeight: '400',
        padding: 8
    },
    servicesWrapper: {
        // backgroundColor: 'red',
        height: 60,
        // padding:10,
        // paddingHorizontal:300,
        // paddingRight: 220,
        // paddingLeft:100
    },
    service: {
        backgroundColor: secondary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 200,
        marginHorizontal: 5,
        marginVertical: 7,
        paddingHorizontal: 10,
        // paddingVertical: 5 
    },
    map: {
        // flex:1,
        width: '95%',
        height: '20%',
        marginBottom:10,
        // alignItems: 'center',
        // justifyContent: 'center',
        alignSelf: 'center',
    //     borderRadius:15,
    //     borderWidth:5,
    //     borderColor: tertiary,
      },


});