import React,{useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Button, Input} from 'react-native-elements'

const AuthForm = ({headerText1,headerText2, errorMessage,submitButtonText,onSubmit})=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    return <>
    <Text h3>{headerText1}</Text>
    <Text h3>{headerText2}</Text>
    <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
       />
       <Input
       secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}/>
        {errorMessage? <Text >{errorMessage}</Text>:null}
        <Button title={submitButtonText} onPress={()=>onSubmit({email,password})}/>
    </>
}

const style = StyleSheet.create({

})

export default AuthForm