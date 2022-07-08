import React, { useState } from 'react';

// login / signup navigator 
import LoginSignupStack from './navigators/rootStack';

//loading 
import AppLoading from 'expo-app-loading';

//storage 
import AsyncStorage from '@react-native-async-storage/async-storage';

// Credentials context
import {CredentialsContext} from './components/credentialsContext';

export default function App() {

  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState();

  const checkLoginCredentials = () => {
    AsyncStorage
    .getItem('asali')
    .then((result) => {
      if(result !== null){
        setStoredCredentials(JSON.parse(result))
      }
      else{
        setStoredCredentials(null);
      }
    })
    .catch((error) => console.log(error))
  }


  if(!appReady){
    return (
        <AppLoading 
          startAsync={checkLoginCredentials}
          onFinish={ () => setAppReady(true)}
          onError={console.warn}
        />
    ); 
  }
  return (
    <CredentialsContext.Provider value={{storedCredentials, setStoredCredentials}}>
      <LoginSignupStack />
    </CredentialsContext.Provider>
    
  );
}
// import * as React from 'react';
// import * as WebBrowser from 'expo-web-browser';
// import * as Google from 'expo-auth-session/providers/google';
// import { Button, View } from 'react-native';


// WebBrowser.maybeCompleteAuthSession();

// export default function App() {
//   const [request, response, promptAsync] = Google.useAuthRequest({
//     expoClientId: '330096218249-ac9golru5j9qb2480anvfhtnef69cts9.apps.googleusercontent.com',
//     iosClientId: '330096218249-tg9fs1t61smihbj8uovp4bou7id06qtp.apps.googleusercontent.com',
//     androidClientId: '330096218249-i6d9jmk15rpla8ei2o5151umcoq4hrg6.apps.googleusercontent.com',
//     webClientId: '330096218249-ac9golru5j9qb2480anvfhtnef69cts9.apps.googleusercontent.com',
//   });

//   React.useEffect(() => {
//     if (response?.type === 'success') {
//       const { authentication } = response;
//       console.log(authentication)
//       }
//   }, [response]);

//   return (
//     <View>
//       <Button title="nothing"></Button>
//       <Button
//         disabled={!request}
//         title="Login"
//         onPress={() => {
//           promptAsync();
//           }}
//       />
//     </View>
    
//   );
// }
