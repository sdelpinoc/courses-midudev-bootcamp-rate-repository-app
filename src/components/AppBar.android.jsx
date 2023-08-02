import { ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import Constants from 'expo-constants'

import theme from './theme'
import StyledText from './StyledText'
import { Link, useLocation } from 'react-router-native'

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation()

  const active = pathname === to

  const textStyles = [
    styles.text,
    active && styles.active
  ]
  // console.log(textStyles)

  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText fontWeight='bold' style={textStyles}>
        {children}
      </StyledText>
    </Link>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scroll}>
        <AppBarTab to='/'>Repositories</AppBarTab>
        <AppBarTab to='/sign-in'>Sign in</AppBarTab>
        <AppBarTab to='/register'>Register</AppBarTab>
        <AppBarTab to='/android'>Android</AppBarTab>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'red',
    paddingTop: Constants.statusBarHeight + 10
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10
  },
  active: {
    color: theme.appBar.textPrimary
  },
  scroll: {
    paddingBottom: 15
  }
})

export default AppBar
