import React,{useContext} from "react";
import { SafeAreaView } from "react-navigation";
import { Text} from 'react-native'
import { Button } from "react-native-elements";
import {Context} from '../context/AuthContext';
import {FontAwesome} from '@expo/vector-icons'
const AccountScreen = ()=>{
const {signout} = useContext(Context)
    return(
        <SafeAreaView forceInset={{top:'always'}}>
        <Text style={{fontSize:30}}>AccountScreen</Text>
        <Button title="Sign Out" onPress={()=>{signout()}}/>
        </SafeAreaView>
    )
}
AccountScreen.navigationOptions = {
    title:'Account',
    tabBarIcon:<FontAwesome name="gear" size={20}/>
}

export default AccountScreen