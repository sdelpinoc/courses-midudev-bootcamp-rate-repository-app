import { View, StyleSheet, Image } from 'react-native' // Platform

import StyledText from './StyledText'
import RepositoryStats from './RepositoryStats'
import theme from './theme'

const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => {
  return (
    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
      {/* <StyledText color='primary' fontSize='subheading' fontWeight='bold'>id: {props.id}</StyledText> */}
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
      </View>
      <View style={{ flexShrink: 1 }}>
        <StyledText fontSize='subheading' fontWeight='bold'>{fullName}</StyledText>
        <StyledText color='secondary'>{description}</StyledText>
        <StyledText style={styles.language}>{language}</StyledText>
      </View>
    </View>
  )
}

const RepositoryItem = (props) => {
  return (
    <View
      key={props.id}
      style={styles.container}
    >
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    paddingVertical: 5
    // borderRadius: 5
  },
  strong: {
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 5
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    // With the properties of the Platform component we can change the styles of the elements
    // backgroundColor: Platform.OS === 'android' ? theme.colors.primary : 'green',
    // backgroundColor: Platform.select({
    //   android: theme.colors.primary,
    //   ios: 'red',
    //   default: 'green'
    // }),
    alignSelf: 'flex-start',
    borderRadius: 5,
    marginVertical: 4 // marginTop, marginBottom
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  }
})

export default RepositoryItem
