import React,{useContext} from "react";
import {FlatList, Text,Button,TouchableOpacity} from 'react-native'
import { NavigationEvents } from "react-navigation";
import { ListItem } from "react-native-elements";
import {Context as TrackContext} from "../context/trackContext"
// import { Item } from "react-native-paper/lib/typescript/src/components/Drawer/Drawer";
const TrackListScreen = ({navigation})=>{
    const {state,fetchTrack} = useContext(TrackContext)
    console.log(state)
    return<>
    <NavigationEvents onWillFocus={fetchTrack}/>
        
        <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate('TrackDetail', {_id:item._id})}>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
        
        {/* <Button title="Go to TrackDetail" onPress={()=>{navigation.navigate('TrackDetail')}}/> */}
    </>
}
TrackListScreen.navigationOptions = {
    title:'Track'
}

export default TrackListScreen