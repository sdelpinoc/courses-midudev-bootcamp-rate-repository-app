import { TextInput, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10
  },
  error: {
    borderColor: 'red'
  }
})

const StyledTextInput = ({ children, style = {}, ...restOfProps }) => {
  // console.log(restOfProps)
  // console.log(typeof restOfProps.error)

  const errorStyle = restOfProps.error && styles.error

  const inputTextStyles = {
    ...styles.textInput,
    ...style,
    ...errorStyle
  }
  // console.log(inputTextStyles)

  return (
    <TextInput style={inputTextStyles} {...restOfProps}>
      {children}
    </TextInput>
  )
}

export default StyledTextInput
