import React,{useContext,useCallback} from "react";
// import { StyleSheet} from 'react-native'
import { Text } from "react-native-elements";
import { SafeAreaView,withNavigationFocus } from "react-navigation";
import Map from "../components/map";
import TrackForm from "../components/trackForm";
// import '../_mockLocation'
import useLocation from "../hooks/useLocation";
import {Context as LocationCotext} from '../context/LocationContext'
import {FontAwesome} from '@expo/vector-icons'
const TrackCreateScreen = ({isFocused})=>{
  const {state:{recording},addLocation} = useContext(LocationCotext)
    const callback = useCallback(
      location=>{
      addLocation(location,recording)
    },
      [recording]
      )
  const [err] = useLocation(isFocused||recording,callback)
  
    // console.log(isFocused)
      
    return(
        <SafeAreaView forceInset={{top:'always'}}>
            <Text h3>Create Track </Text>
            <Map/>
            {/* <NavigationEvents onWillBlur={()=>console.log('LEAVING')}/> */}
            {err?<Text>Please enable location services</Text>:null}
            <TrackForm/>
        </SafeAreaView>
    )
}
TrackCreateScreen.navigationOptions={
  title:'Add Track',
  tabBarIcon:<FontAwesome name="plus" size={20}/>
}

export default withNavigationFocus(TrackCreateScreen)