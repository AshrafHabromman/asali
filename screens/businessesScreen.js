
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

export default function BusinessesScreen({ route, navigation }) {

    const { category, } = route.params;

    const businesses_json = {
        business: [
            {
                key: 1,
                businessName: 'Amazing food place',
                rating: 3,
                reviews: 12,
                description: 'Bla bla bla bla bla bal bal lla la bla ',
                image: 'C:\Users\Ashraf Habromman\asali\assets\homeImages\resturant.jpg',
            },
            {
                key: 2,
                businessName: 'Second Amazing food place',
                rating: 4,
                reviews: 14,
                description: 'Bla bla bla bla bla bal bal lla la bla ',
                image: 'C:\Users\Ashraf Habromman\asali\assets\homeImages\resturant.jpg',
            },
            {
                key: 3,
                businessName: 'Third Amazing food place',
                rating: 5,
                reviews: 16,
                description: 'Bla bla bla bla bla bal bal lla la bla ',
                image: 'C:\Users\Ashraf Habromman\asali\assets\homeImages\resturant.jpg',
            },
            {
                key: 4,
                businessName: '4 Amazing food place',
                rating: 5,
                reviews: 16,
                description: 'Bla bla bla bla bla bal bal lla la bla ',
                image: 'C:\Users\Ashraf Habromman\asali\assets\homeImages\resturant.jpg',
            },
            {
                key: 5,
                businessName: '4 Amazing food place',
                rating: 5,
                reviews: 16,
                description: 'Bla bla bla bla bla bal bal lla la bla ',
                image: 'C:\Users\Ashraf Habromman\asali\assets\homeImages\resturant.jpg',
            },
            {
                key: 6,
                businessName: '4 Amazing food place',
                rating: 5,
                reviews: 16,
                description: 'Bla bla bla bla bla bal bal lla la bla ',
                image: 'C:\Users\Ashraf Habromman\asali\assets\homeImages\resturant.jpg',
            },
            {
                key: 7,
                businessName: '4 Amazing food place',
                rating: 5,
                reviews: 16,
                description: 'Bla bla bla bla bla bal bal lla la bla ',
                image: 'C:\Users\Ashraf Habromman\asali\assets\homeImages\resturant.jpg',
            }
        ]
    }

    const [businesses, setBusinesses] = useState(businesses_json);



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.businessTitleWrapper}>
                <Text style={styles.businessTitle}>{category}</Text>
            </View>

            <ScrollView style={styles.businessesWrapper}>
                {
                    businesses.business.map((business, index) => (
                        <TouchableOpacity onPress={()=> {navigation.navigate('BusinessScreen', {businessID: business.key, businessName: business.businessName} )}}>
                            <BusinessCard
                                businessName={business.businessName}
                                businessDescription={business.description}
                                rating={business.rating}
                                reviews={business.reviews}
                                businessImage={business.image}
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