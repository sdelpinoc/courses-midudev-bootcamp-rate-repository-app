// import Constants from 'expo-constants'
import { View, StyleSheet, Text } from 'react-native' // Platform
import { Route, Routes } from 'react-router-native'

import RepositoryList from './RepositoryList'

// This import will use the AppBar.android.jsx component if you use that platform, you don't use extension
// import AppBar from './AppBar'

import AppBar from './AppBar.jsx'
import Login from '../pages/Login'

// This allow to import different components according to he platform
// const AppBar = Platform.select({
//   android: () => require('./AndroidAppBar.jsx').default,
//   default: () => require('./AppBar.jsx').default
// })()

const Main = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Rate Repository Application</Text> */}
      <AppBar />
      <Routes>
        <Route path='/'
          element={
            <RepositoryList />
          }
        />
        <Route path='/sign-in'
          element={
            <Login />
          }
        />
        <Route path='/*'
          element={
            <Text>404</Text>
          }
        />
      </Routes>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    // height: '100%',
    flexShrink: 1
  },
  title: {
    marginBottom: 5,
    fontSize: 20,
    textAlign: 'center'
  }
})

export default Main
