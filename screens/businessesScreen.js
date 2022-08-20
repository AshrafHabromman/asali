
import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, ScrollView, TouchableOpacity, Text, } from 'react-native';

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

import BusinessCard from '../components/businessCard';

import { SafeAreaView } from 'react-native-safe-area-context';

const { primary_1, darkPrimary, secondary, tertiary, brandTitle, brandColor } = Colors;

import { reviewsTry } from '../data';
export default function BusinessesScreen({ route, navigation }) {

    const { headerTitle, businessesTry } = route.params;

    // TODO 
    // you have headerTitle you can use it to put in the API 
    // return values should be array of businesses and each element in array looks like: 
    // {
    //     key: 1,
    //     businessName: 'Amazing food place',
    //     rating: 3,
    //     numReviews: 12,
    //     description: 'Bla bla bla bla bla bal bal lla la bla ',
    //     image: '',
    // }
    const [businesses, setBusinesses] = useState(/* array of businesses */ );


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.businessTitleWrapper}>
                <Text style={styles.businessTitle}>{headerTitle}</Text>
            </View>

            <ScrollView style={styles.businessesWrapper}>
                {
                    businessesTry.map((business, index) => (
                        <TouchableOpacity onPress={()=> {navigation.navigate('BusinessScreen', {businessID: business.key, businessName: business.businessName, reviewsTry:reviewsTry} )}}>
                            <BusinessCard
                                business={business}
                            />
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 15
    },
    businessTitleWrapper: {
        marginLeft: 50,
        marginTop: 12,
    },
    businessTitle: {
        fontSize: 24,
    },
    businessesWrapper: {
        marginHorizontal: 20,
        marginTop: 15,
        marginBottom: 60
    }
});