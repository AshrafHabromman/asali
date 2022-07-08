
import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, ScrollView, TouchableOpacity, Text,  } from 'react-native';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledTextInput,
    StyledInputLabel,
    LeftIcon,
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent,

} from './../components/styles';

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

import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar, Title, Caption, TouchableRipple } from 'react-native-paper';
const { primary_1, darkPrimary, secondary, tertiary, brandTitle, brandColor } = Colors;

export default function AccountScreen({navigation}) {
    const [userName, setUserName] = useState('Ashraf habromman');
    const [bio, setBio] = useState('Food lover');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection:'row', marginTop:15}}>
                    <Avatar.Image 
                        source={require('../assets/logos/logo.png')}
                        size={100}
                    />
                    <View style={{marginLeft:20}}>
                        <Title style={[styles.title,
                            {marginTop: 15, marginBottom:5}]}
                        >
                            Ashraf Habromman
                        </Title>
                        <Caption style={styles.caption}> food lover </Caption>
                    </View>
                </View>
            </View>
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <MaterialCommunityIcons name='map-marker-radius' size={20} color={tertiary}/>
                    <Text style={{color:tertiary, marginLeft:20 }}>Nablus, Palestine</Text>
                </View>
                <View style={styles.row}>
                    <MaterialCommunityIcons name='email' size={20} color={tertiary}/>
                    <Text style={{color:tertiary, marginLeft:20 }}>ashraf@gmail.com</Text>
                </View>
                <View style={styles.row}>
                    <Fontisto name='date' size={20} color={tertiary}/>
                    <Text style={{color:tertiary, marginLeft:20 }}>2000-5-15</Text>
                </View>
            </View>

            <View style={styles.infoBoxWrapper}>

                <TouchableOpacity style={styles.infoBox}>
                    <SimpleLineIcons name='user-following' size={22}/>
                    <Caption>Followers | 30</Caption>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.infoBox}>
                    <EvilIcons name='star' size={32}/>
                    <Caption>Reviews | 5</Caption>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.infoBox}>
                    <MaterialCommunityIcons name='image-multiple-outline' size={24}/>
                    <Caption>Photos | 20</Caption>
                </TouchableOpacity>
            </View>

            <View style={styles.menuWrapper}>
                <TouchableRipple onPress={()=>{console.log('hi')}}>
                    <View style={styles.menuItem}>
                        <Ionicons name='heart-outline' color={secondary} size={24}/>
                        <Text style={styles.menuItemText}>Your favoraties</Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={()=>{console.log('hi')}}>
                    <View style={styles.menuItem}>
                        <MaterialCommunityIcons name='share-outline' color={secondary} size={24}/>
                        <Text style={styles.menuItemText}>Share with friends</Text>
                    </View>
                </TouchableRipple>
                {/* <TouchableRipple onPress={()=>{console.log('hi')}}>
                    <View style={styles.menuItem}>
                        <Ionicons name='heart-outline' color={secondary} size={24}/>
                        <Text style={styles.menuItemText}>Your favoraties</Text>
                    </View>
                </TouchableRipple> */}
                <TouchableRipple onPress={()=>navigation.navigate('EditAccountScreen')}>
                    <View style={styles.menuItem}>
                        <MaterialCommunityIcons name='account-edit-outline' color={secondary} size={24}/>
                        <Text style={styles.menuItemText}>Edit profile</Text>
                    </View>
                </TouchableRipple>

            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection:{
        paddingHorizontal:30,
        marginBottom:25,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
    },
    caption:{
        fontSize:14,
        lineHeight:14,
        fontWeight: '500',
    },
    row:{
        flexDirection:'row',
        marginBottom: 10,
    },
    infoBoxWrapper:{
        borderBottomColor: tertiary,
        borderBottomWidth: 1,
        borderTopColor: tertiary, 
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox:{
        width: '33.3333333%',
        alignItems:'center',
        justifyContent:'center',
        borderRightColor: tertiary,
        borderRightWidth:1,
        
        // backgroundColor: secondary
    },
    menuWrapper:{
        marginTop:10,
    },
    menuItem:{
        flexDirection: 'row',
        paddingVertical:15,
        paddingHorizontal: 30
    },
    menuItemText:{
        color:tertiary, 
        marginLeft: 20,
        fontWeight: '400',
        fontSize: 16,
        // lineHeight: 26
    },
    reviews:{
        // backgroundColor: primary_1,
        height:100,
        marginVertical:18,
        borderRadius:5,
        marginHorizontal:10,

    }

});