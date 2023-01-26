import React,{useContext} from "react";
import { Input,Button } from "react-native-elements";
import {Context as LocationContext} from '../context/LocationContext'
import useSaveTrack from "../hooks/useSaveTrack";
const TrackForm = ()=>{
const {state:{name,recording,locations},
    startRecording,
    stopRecording,
    changeName}=useContext(LocationContext)
    console.log(locations.length)
    const [saveTrack] =useSaveTrack()
    return <>
    <Input value={name} placeholder="Enter name" onChangeText={changeName}/>
   {recording?(<Button title="Stop" onPress={stopRecording}/>):
    (<Button title="Start Recording" onPress={startRecording}/>)}
{!recording&&locations.length?(<Button title="Save Recording" onPress={saveTrack}/>):null}
    </>
}

export default TrackForm