import React from 'react';
import { useState } from 'react';
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
const GalleryScreen = ({ route, navigation }) => {

    
    const { images, } = route.params;

    console.log(images)

    return (
        <View style={styles.container}>
                <FlatList
                    data={images}
                    keyExtractor={item => item.id}
                    // pagingEnabled
                    numColumns={3}
                    style={styles.wrapper}
                    // style={}
                    renderItem={
                        ({ item }) => {
                            return (
                                <TouchableOpacity>
                                    <Image
                                        source={item.imageSource}
                                        
                                        style={{
                                            borderRadius: 8,
                                            height: height / 4,
                                            width: width / 3 - 6,
                                            margin: 2,
                                            backgroundColor: 'red'

                                        }}
                                    resizeMode='cover'
                                    />
                                </TouchableOpacity>

                            )
                        }
                    }
                />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    wrapper: {
        // display: 'flex',
        // flexDirection: 'row',
        alignSelf: 'center',
        marginTop:2,
        marginBottom: 65
    },


});

export default GalleryScreen;