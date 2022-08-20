import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  Dimensions
} from 'react-native';
import {
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
  Fontisto
}
  from 'react-native-vector-icons';
import StarRating from '../components/starRarting';
import { WebView } from 'react-native-webview';
import mapTemplate from './maps/webmap';

import { Animated } from 'react-native';
import {
  Colors,
} from '../components/styles';

const { primary_1, darkPrimary, secondary, tertiary, brandTitle, brandColor } = Colors;


const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

export default function SearchResultsScreen({navigation}) {


  const Images = [
    { image: require("../assets/borger.jpg") },
    { image: require("../assets/logos/logo.png") },
    { image: require("../assets/logos/logo.png") },
    { image: require("../assets/logos/logo.png") },
  ];

  const markers = [
    {
      coordinate: {
        latitude: 22.6293867,
        longitude: 88.4354486,
      },
      title: "Amazing Food Place",
      description: "This is the best food place",
      image: Images[0].image,
      rating: 4,
      reviews: 99,
    },
    {
      coordinate: {
        latitude: 22.6345648,
        longitude: 88.4377279,
      },
      title: "Second Amazing Food Place",
      description: "This is the second best food place",
      image: Images[1].image,
      rating: 5,
      reviews: 102,
    },
    {
      coordinate: {
        latitude: 22.6281662,
        longitude: 88.4410113,
      },
      title: "Third Amazing Food Place",
      description: "This is the third best food place",
      image: Images[2].image,
      rating: 3,
      reviews: 220,
    },
    {
      coordinate: {
        latitude: 22.6341137,
        longitude: 88.4497463,
      },
      title: "Fourth Amazing Food Place",
      description: "This is the fourth best food place",
      image: Images[3].image,
      rating: 4,
      reviews: 48,
    },
    {
      coordinate: {
        latitude: 22.6292757,
        longitude: 88.444781,
      },
      title: "Fifth Amazing Food Place",
      description: "This is the fifth best food place",
      image: Images[3].image,
      rating: 4,
      reviews: 178,
    },
  ];

  const initialMapState = {
    markers,
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

  let webRef = undefined;
  let [mapCenter, setMapCenter] = useState('-121.913, 37.361');

  const onButtonPress = () => {
    const [lng, lat] = mapCenter.split(",");
    webRef.injectJavaScript(`map.setCenter([${parseFloat(lng)}, ${parseFloat(lat)}])`);
  }

  const handleMapEvent = (event) => {
    console.log(event.nativeEvent.data)
    setMapCenter(event.nativeEvent.data)
  }


  let mapAnimation = new Animated.Value(0);
  let mapIndex = 0;

  const _scrollView = React.useRef(null);

  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3)
      if (index >= state.markers.length) {
        index = state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex != index) {
          mapIndex = index
          const { coordinate } = state.markers[index];
          // console.log(webRef)
          webRef.injectJavaScript(`map.setCenter([${parseFloat(coordinate.longitude)}, ${parseFloat(coordinate.latitude)}])`);
          webRef.injectJavaScript(`new tt.Marker().setLngLat([${parseFloat(coordinate.longitude)}, ${parseFloat(coordinate.latitude)}]).addTo(map)`);

        }
      }, 10)
    });
  })

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
      <TouchableOpacity style={styles.searchBox} onPress={() => {navigation.navigate('SearchBusinessScreen')}}>
        <TextInput
          placeholder='search'
          editable={false}
          style={{ flex: 10, }}
          // onChangeText={(value) => { console.log(value) }}
          // onPressIn={() => {  }}
        ></TextInput>
        <FontAwesome name='sliders' size={27} style={{ flex: 1, alignSelf: 'center', }} />
      </TouchableOpacity>
{/* 
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
      </ScrollView> */}

      <Animated.ScrollView
        style={styles.cardContainer}
        horizontal
        pagingEnabled
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        // snapToInterval={CARD_WIDTH + 35}
        snapToAlignment='center'
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal: SPACING_FOR_CARD_INSET
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                }
              }
            }
          ],
          { useNativeDriver: true }
        )}
      >
        {state.markers.map((marker, index) => (
          <View style={styles.card} key={index}>
            <Image
              source={marker.image}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.textContent}>
              <Text numberOfLines={1} style={styles.cardTitle}>{marker.title}</Text>
              <StarRating rating={marker.rating} reviews={marker.reviews} />
              <Text numberOfLines={1} style={styles.cardDescription}>{marker.description}</Text>
              <View style={styles.button}>
                <TouchableOpacity style={[styles.reviewButton, { borderWidth: 1, borderColor: secondary }]} onPress={() => { navigation.navigate('BusinessScreen', {businessName:'soso time'}) }}>
                  <Text style={styles.reviewButtonText}> Review now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    position: 'absolute',
    top: Platform.OS === 'ios' ? 90 : 80,
    paddingHorizontal: 10
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection: "row",
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 35,
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
  cardContainer: {
    position: 'absolute',
    // top:100,
    bottom: 70,
    // marginTop: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: "row",
    backgroundColor: 'transparent',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  button: {
    alignItems: 'center',
    marginTop: 5
  },
  reviewButton: {
    width: '100%',
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    color: secondary
  },

  reviewButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: secondary
  }
});