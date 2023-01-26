import React, { useContext } from "react";
import { View, Text, StyleSheet } from 'react-native'
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context } from "../context/AuthContext";
const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(Context)
    return (
        <View>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            <AuthForm headerText1="Track YourSelf"
        headerText2="Sign In First"
                onSubmit={signin}
                errorMessage={state.errorMessage}
                submitButtonText="Sign In" />
            <NavLink
                text="Dont have an Account ? Sign Up instead!"
                routeName="Signup"
            />
        </View>
    )
}
SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

export default SigninScreen