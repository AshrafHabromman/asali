// import { useState, useEffect } from 'react';
// import * as Location from 'expo-location';

// const currentLocation = async () => {
//     const [currentLocation, setCurrentLocation] = useState({ longitude: null, latitude: null });

//     useEffect(() => {
//         (async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted')
//                 return;

//             let location = await Location.getCurrentPositionAsync({});
//             setCurrentLocation({ longitude: location.coords.longitude, latitude: location.coords.latitude });
//             console.log(location)
//         })();

//     }, []);

//     return currentLocation
// }
// export default currentLocation
