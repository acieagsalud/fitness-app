import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// @ts-ignore
import Amplify, { Auth } from 'aws-amplify';
// @ts-ignore
import awsconfig from './aws-exports';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native'

Amplify.configure(awsconfig);

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default withAuthenticator(App, {includeGreetings: true});

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
