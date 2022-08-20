import React from 'react';
import { useState, useCallback } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, FlatList, Dimensions, ImageBackground } from 'react-native';
import { Avatar } from 'react-native-paper';
import {
    Colors,
    Line
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

const { primary_1, darkPrimary, secondary, tertiary, brandTitle, brandColor } = Colors;

const { width, height } = Dimensions.get("window");
const FullScreenImagesScreen = ({ route, navigation }) => {

    
    const { images, } = route.params;

    console.log(images)

    return (
        <View style={styles.container}>
                <FlatList
                    horizontal
                    data={images}
                    keyExtractor={item => item.id}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    // numColumns={3}
                    style={styles.wrapper}
                    // style={}
                    renderItem={
                        ({ item }) => {
    
                            return (
                                
                                <View style={{alignSelf: 'center',}}>
                                    <Image
                                        source={item.imageSource}
                                        // width={width}
                                        // height={width*0.8}
                                        style={{

                                            borderRadius: 8,
                                            height: width * 0.75 ,   
                                            width: width,
                                            // margin: 2,
                                            // backgroundColor: 'red'
                                        }}
                                        resizeMode= 'stretch'
                                    />
                                </View>

                            )
                        }
                    }
                />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: tertiary,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        // backfaceVisibility: 0.5
        
    },
    wrapper: {
        // display: 'flex',
        // flexDirection: 'row',
        // height:height,
        // width:width,
        alignSelf: 'center',
        marginTop:2,
        marginBottom: 65
    },


});

export default FullScreenImagesScreen;