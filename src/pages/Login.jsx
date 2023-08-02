import { Button, StyleSheet, View } from 'react-native'
import { Formik, useField } from 'formik'

import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText'
import { loginValidationSchema } from '../validationSchemas/login'

const initialValues = {
  email: '',
  password: ''
}

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)

  return (
    <>
      <StyledTextInput
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
        error={meta.error}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  )
}

// const validate = values => {
//   const errors = {}

//   if (!values.email) {
//     errors.email = 'Email is required'
//   } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/i.test(values.email)) {
//     errors.email = 'Invalid email address'
//   }
//   console.log(errors)
//   return errors
// }

export default function Login () {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
      validationSchema={loginValidationSchema}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue
              name='email'
              placeholder='Email'
            />
            <FormikInputValue
              name='password'
              placeholder='Password'
              secureTextEntry
            />
            <Button style={styles.button} onPress={handleSubmit} title='Log in'>Log in</Button>
          </View>
        )
      }}
    </Formik>
  )
}

const styles = StyleSheet.create({
  form: {
    margin: 12
  },
  button: {
    borderRadius: 5
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5
  }
})
