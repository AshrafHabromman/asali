import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, ScrollView,TouchableOpacity,Text } from 'react-native';
import { WebView } from 'react-native-webview';
import mapTemplate from './maps/webmap';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';


export default function SearchScreen() {
    let webRef = undefined;
    let [mapCenter, setMapCenter] = useState('-121.913, 37.361');

    
    const onButtonPress = () => {
        const [lng, lat] = mapCenter.split(",");
        webRef.injectJavaScript(`map.setCenter([${parseFloat(lng)}, ${parseFloat(lat)}])`);
    }

    const handleMapEvent = (event) => {
        setMapCenter(event.nativeEvent.data)
    }
    const initialMapState = {

        categories: [
          { 
            name: 'Fastfood Center', 
            icon: <MaterialCommunityIcons style={styles.chipsIcon} name="food-fork-drink" size={18} />,
          },
          {
            name: 'Restaurant',
            icon: <Ionicons name="ios-restaurant" style={styles.chipsIcon} size={18} />,
          },
          {
            name: 'Dineouts',
            icon: <Ionicons name="md-restaurant" style={styles.chipsIcon} size={18} />,
          },
          {
            name: 'Snacks Corner',
            icon: <MaterialCommunityIcons name="food" style={styles.chipsIcon} size={18} />,
          },
          {
            name: 'Hotel',
            icon: <Fontisto name="hotel" style={styles.chipsIcon} size={15} />,
          },
      ],
        region: {
          latitude: 22.62938671242907,
          longitude: 88.4354486029795,
          latitudeDelta: 0.04864195044303443,
          longitudeDelta: 0.040142817690068,
        },
      };
    
      const [state, setState] = React.useState(initialMapState);
    
    return (
        <View style={styles.container}>

            <WebView
                ref={(r) => (webRef = r)}
                onMessage={handleMapEvent}
                style={styles.map}
                originWhitelist={['*']}
                source={{ html: mapTemplate }}
                onError={(error) => { console.log(error) }}
            >

            </WebView>
            <View style={styles.searchBox}>
                <TextInput
                    placeholder='search'
                    keyboardType='numeric'
                    onChangeText={(value) => { console.log(value) }}
                    onFocus={() => { console.log('hii') }}
                    onPressIn={() => { console.log('hii') }}
                ></TextInput>
            </View>

            <ScrollView
                horizontal
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                height={50}
                style={styles.chipsScrollView}
                contentInset={{ // iOS only
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 20
                }}
                contentContainerStyle={{
                    paddingRight: Platform.OS === 'android' ? 20 : 0
                }}
            >
                {state.categories.map((category, index) => (
                    <TouchableOpacity key={index} style={styles.chipsItem}>
                        {category.icon}
                        <Text>{category.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        margin:5
    },
    buttons: {
        flexDirection: 'row',
        height: '15%',
        backgroundColor: '#fff',
        color: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        //   marginTop: 12
    },
    textInput: {
        height: 40,
        width: "60%",
        marginRight: 12,
        paddingLeft: 5,
        borderWidth: 1,
    },
    map: {
        width: '100%',
        height: '85%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    searchBox: {
        position: 'absolute',
        marginTop: Platform.OS === 'ios' ? 40 : 20,
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
    chipsScrollView: {
        position:'absolute', 
        top:Platform.OS === 'ios' ? 90 : 80, 
        paddingHorizontal:10
      },
      chipsIcon: {
        marginRight: 5,
      },
      chipsItem: {
        flexDirection:"row",
        backgroundColor:'#fff', 
        borderRadius:20,
        padding:8,
        paddingHorizontal:20, 
        marginHorizontal:10,
        height:35,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
      },
      scrollView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
      },
});