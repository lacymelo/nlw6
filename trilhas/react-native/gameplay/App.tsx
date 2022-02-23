import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { useFonts } from 'expo-font';

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.']);

import Routes from './src/routes';
import Background from './src/components/Background';
import { AuthProvider } from './src/hooks/auth';


export default function App() {
  //fontes utilizadas no projeto
  let [fontsLoaded] = useFonts({
      Inter_400Regular,
      Inter_500Medium,
      Rajdhani_500Medium,
      Rajdhani_700Bold
  });

  if(!fontsLoaded){
    <AppLoading/>
  }

  return (
    <Background>
      <StatusBar
        style='light'
      />
        <AuthProvider>
          <Routes/>
        </AuthProvider>
    </Background>
  );
}

