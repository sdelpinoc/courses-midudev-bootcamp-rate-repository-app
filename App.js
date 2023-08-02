// import React from 'react'
// import { View } from 'react-native'
import { NativeRouter } from 'react-router-native'

// This package change the color of the icons of the status bar of the device
import { StatusBar } from 'expo-status-bar'

// Graphql, Apollo
import { ApolloProvider } from '@apollo/client'
import createApolloClient from './src/utils/apolloClient.js'

import Main from './src/components/Main'

const apolloClient = createApolloClient()

export default function App () {
  // if (global.location && global.location.pathname.includes('/debugger-ui')) {
  //   console.log('Remote debug is on');
  // } else {
  //   console.log('Remote debug is off');
  // }
  // const isDebuggingEnabled = (typeof atob !== 'undefined');
  // console.log({ isDebuggingEnabled })
  // const isHermes = () => !!global.HermesInternal
  // console.log('isHermes(): ', isHermes())
  console.log('Hello there!')
  return (
    <ApolloProvider client={apolloClient}>
      <StatusBar style='light' />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
  )
}
