
import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, FlatList, Image } from "react-native"
import { shadow } from "react-native-paper";

import { Rating, } from 'react-native-ratings';

import {
    Colors,
    Line
} from '../components/styles';

import {

    EvilIcons
}
    from 'react-native-vector-icons';

import * as ImagePicker from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';

const { primary_1, darkPrimary, secondary, tertiary, brandTitle, brandColor } = Colors;

const { height, width } = Dimensions.get('window')

const WriteReviewScreen = ({ route, navigation }) => {

    // const {businessName} = route.params.businessName
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

    const businessImages = [
        {
            id: 11,
            imageSource: require('../assets/food/food1.jpg'),
        },
        {
            id: 22,
            imageSource: require('../assets/food/food2.jpg')
        },
        {
            id: 33,
            imageSource: require('../assets/food/food3.jpg'),
        },
        {
            id: 12,
            imageSource: require('../assets/food/food4.jpg'),
        },

    ]


    const [images, setImages] = useState([]);

    const PostImage = ({ item, }) => {
        return (
            <TouchableOpacity onPress={() => { console.log('hello'); }}>
                <Image
                    style={styles.image}
                    source={{ uri: item }}
                    resizeMode='cover'
                />
            </TouchableOpacity>
        )
    }

    const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating)
    }

    const takePhotoFromCamera = async () => {

        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            // allowsEditing: true,
            // aspect: [4, 3],
            quality: 1,
        });

        if (result.uri != undefined) {
            setImages([...images, result.uri])
            console.log(images)
        }



    }

    return (
        <View style={styles.container}>
            <Line />
            <View style={{ alignSelf: 'flex-start' }}>
                <Rating
                    // showRating
                    imageSize={30}
                    type='custom'
                    startingValue={1}
                    minValue={1}
                    ratingColor={secondary}
                    tintColor='white'
                    ratingBackgroundColor='transparent'
                    onFinishRating={ratingCompleted}
                    style={{ borderRadius: 5, }}
                />
            </View>

            <View style={{ flex: 1, flexDirection: 'column' }}>
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
                        marginVertical:10

                    }}
                    onChangeValue={(value) => {
                        console.log(value);
                    }}
                />
                <TextInput
                    style={styles.reviewText}
                    multiline
                    numberOfLines={25}
                    onResponderStart={() => console.log('start')}
                    onResponderTerminationRequest={() => console.log('end')}
                />

                <View style={styles.imagesWrapper}>
                    <FlatList
                        // style={{flex:1, alignContent:'center',}}
                        // nestedScrollEnabled={true}
                        horizontal={true}
                        data={images}
                        renderItem={PostImage}
                    // keyExtractor={item => item.id}
                    />
                </View>

                <View style={{ flex: 1, flexDirection: 'row', justifyContent:'center', alignSelf: 'center' }}>

                    <TouchableOpacity style={styles.submitButton}>
                        <Text style={{ color: secondary, fontWeight: '700' }}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mediaButton} onPress={takePhotoFromCamera}>
                        <EvilIcons name='camera' size={40} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.mediaButton}>
                        <EvilIcons name='image' size={40} />
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        marginHorizontal: 15,
        marginBottom:70,
        // height: '80%',
        // alignItems: "center",
        // justifyContent:'center'
        // backgroundColor: 'red'
    },
    reviewText: {
        flex: 8,
        // alignContent: 'flex-start',
        // justifyContent: 'flex-start',
        // marginTop: 15,
        padding: 15,
        textAlignVertical: 'top',
        shadowColor: '#ccc',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 1,
        // backgroundColor: 'red'
    },
    submitButton: {
        flex: 10,
        // backgroundColor: secondary,
        borderColor: secondary,
        borderWidth: 2,
        // borderStyle:{ }
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mediaButton: {
        flex: 2,
        // justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        opacity: 0.65
    },
    imagesWrapper: {
        flex: 3,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        // marginHorizontal:8,
        // marginVertical: 10,
        // position: 'relative',
        // bottom: 40,
        // backgroundColor: 'red'
    },
    image: {
        marginHorizontal: 8,
        marginTop: 8,
        // width:90, 
        height: '80%',
        aspectRatio: 1 / 1,
        borderRadius: 8,
        // alignSelf:'center'
    },
})


export default WriteReviewScreen