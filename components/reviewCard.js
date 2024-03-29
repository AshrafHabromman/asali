import React from 'react';
import { useState } from 'react';
import { StyleSheet, View,Image, Text, TouchableOpacity, FlatList } from 'react-native';
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


import StarRating from './starRarting';
const { primary_1, darkPrimary, secondary, tertiary, brandTitle, brandColor } = Colors;



const ReviewCard = ({ item, navigation }) => {

    const businessName = item.businessName;  
    const userName = item.userName;  
    const reviewText = item.reviewText;
    const rating = item.rating;
    const date = item.date
    
    const images = item.images;
    const coolCount = item.coolCount;
    const funnyCount = item.funnyCount;
    const usefulCount = item.usefulCount;
    //

    // const navigation = useNavigation();
    const PostImage = ({ item, images }) => {
        return(
            <TouchableOpacity onPress={() => { console.log('hello'); navigation.navigate('FullScreenImagesScreen', {images:images}) }}>
                <Image 
                    style={styles.image} 
                    source={item.imageSource}
                    resizeMode='cover'
                />
            </TouchableOpacity>
        )
    }


    const ReactionButton = ({color, title, numberReactions, clickedFlag}) => {

        const [clicked, setClicked] = useState(clickedFlag);
        return(
            <TouchableOpacity 
                style={[styles.reactionButton, { backgroundColor: (clicked) ? color: 'transparent'}]} 
                onPress={ () => {setClicked(!clicked); console.log('hi')}}
            >
                <Fontisto name='sunglasses' size={20} color={ (clicked) ? 'white' : color}/>
                <Text style={{color: (clicked) ? 'white' : color, marginLeft:3}}>{ title } | {numberReactions}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.card}>
            <View style={styles.cardTitle}>
                <Avatar.Image 
                    style={{marginRight:5}}
                    source={require('../assets/logos/logo.png')}
                    size={45}
                />
                <Text style={{width:'85%', alignSelf:'center',}}>
                    <Text style={styles.userName} onPress={() => {navigation.navigate('ForeignAccountScreen', /*TODO*/ )}}>{userName}</Text>
                    <Text style={{fontWeight:'300'}}> has reviewed </Text>
                    <Text style={styles.businessName} onPress={() => {navigation.navigate('BusinessScreen', /*TODO*/ {businessName: 'SoSo Time ! '} )}} >{businessName}</Text>
                </Text>
            </View>
            <View style={{ flexDirection:'row',}}>
                <StarRating rating={rating}/>
                <Text>. {date}</Text>
            </View>
            <View style={styles.reviewText}>
                <Text>
                    {reviewText}
                </Text>
            </View>

            <View style={styles.imagesWrapper}>
                <FlatList 
                    // style={{flex:1, alignContent:'center',}}
                    // nestedScrollEnabled={true}
                    horizontal={true}
                    data={images}
                    renderItem={({item}) => <PostImage item={item} images={images} />}
                    keyExtractor={item => item.id}
                />
            </View>

            <Line />

            <View style={styles.reactionWrapper}>
                <ReactionButton title='Useful' numberReactions={usefulCount} color={secondary} clickedFlag={false}/>
                <ReactionButton title='Cool' numberReactions={coolCount} color={secondary} clickedFlag={false}/>
                <ReactionButton title='Funny' numberReactions={funnyCount} color={secondary} clickedFlag={false}/>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center'
    },

    card: {
        // height: 100,
        // flex:1,
        width:'95%',
        marginVertical: 10,
        padding:15,
        alignSelf: 'center',
        alignItems: 'flex-start',
        shadowColor: '#888',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        borderColor: '#333',
        borderRadius:5,
        borderBottomWidth: 1,
        // borderWidth: 1
        // backgroundColor: tertiary
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
        // flex: 2,
        padding: 10,
        borderColor: '#333',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: '#fff',
    },

    cardTitle: {
        // flex:1,
        flexDirection: 'row',
        // margin:5,
        // padding: 5,
        justifyContent: 'space-between',

        // paddingRight: 20,
        // backgroundColor: 'red'
        
    },
    cardDetalils: {
        fontSize: 12,
        color: '#444',
    },
    userName:{

        fontSize: 16,
        fontWeight: '600'
    },
    businessName:{
        // flex: 1,
        // flexShrink: 'inherit',
        fontSize: 16,
        fontWeight: '600',
    },
    reviewText:{
        // flex:1,
        // backgroundColor: 'red'
    },
    imagesWrapper:{
        flex:1,
        flexDirection: 'row',
        alignSelf: 'center',
        marginHorizontal:8,
        // backgroundColor: 'red'
    },
    image:{
        marginHorizontal: 8,
        marginTop:8,
        width:90, 
        height:90,
        borderRadius:8,
    },
    reactionWrapper:{
        flex:1,
        width: '100%',
        // padding:2,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal:8,
        // backgroundColor: 'yellow',
    },
    reactionButton:{
        // flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginHorizontal: 8,
        // marginTop:8,
        width:90, 
        height:40,
        borderRadius:3,
        borderWidth: 2,
        borderColor: secondary,
    },

});

export default ReviewCard;