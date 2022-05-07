import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import InitApp from './src/InitApp';
import { Provider } from 'react-redux';
import generateStore from './src/redux/store';
import { Provider as PaperProvider } from 'react-native-paper';
import AnimatedLottieView from 'lottie-react-native';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
  const store = generateStore();
  const [lottieLoad, setLottieLoad] = useState(false);
  // useFonts({Knewave: require('./assets/fonts/Knewave-Regular.ttf')});

  useEffect(()=>{
    setTimeout(() => {
      setLottieLoad(true)
    }, 5000);
  },[])

  if(!lottieLoad){
    return (
      <AnimatedLottieView 
        autoPlay style={{backgroundColor:'#FEE0E5'}}
        source={require('./assets/splash.json')}
      />)
  }

  return (
    <Provider store={store}>
      <PaperProvider>
        <InitApp />
      </PaperProvider>
    </Provider>
  );
}
