import React,{useContext} from "react";
import {View, Text, StyleSheet} from 'react-native'
import {Context as TrackContext} from "../context/trackContext"
import MapView, { Polyline } from "react-native-maps";
import TrackListScreen from "./TrackListScreen";
const TrackDetailScreen = ({navigation})=>{
    const {state}=useContext(TrackContext)
    const _id = navigation.getParam('_id')
    const track = state.find(t=>t._id===_id)
    // console.log(track.locations[0].coords)
    const initialCoords = track.locations[0].coords
    console.log(initialCoords)
    return<>
        <Text>{track.name}</Text>
        <MapView
        style={styles}
        initialRegion={{
            longitudeDelta:0.01,
            latitudeDelta:0.01,
            ...initialCoords
            
        }}
        >
            {/* <Polyline coordinates={track.locations.map(loc=>loc.coords)}/> */}
        </MapView>
        </>
}

const styles = StyleSheet.create({
    map:{
        height:300
        // width:200
    }
})
export default TrackDetailScreen