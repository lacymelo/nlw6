import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { useFonts } from 'expo-font';

import Routes from './src/routes';


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
    <>
      <StatusBar
        style='light'
      />

      <Routes/>
    </>
  );
}

