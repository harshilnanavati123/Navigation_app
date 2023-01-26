import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";
import { Context } from '../context/AuthContext'
import AuthForm from "../components/AuthForm";
const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(Context)

  // console.log(state)
  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillBlur={clearErrorMessage}
      />
      <AuthForm
        headerText1="Track YourSelf"
        headerText2="Sign Up First"
        errorMessage={state.errorMessage}
        submitButtonText="Signup"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead"
      />
    </View>
  )
}
SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150
  }
})




export default SignupScreen