import React from "react";
import { Text, TouchableOpacity} from "react-native";
import { withNavigation } from "react-navigation";

const NavLink = ({navigation,text,routeName})=>{
return (
<TouchableOpacity onPress={()=>navigation.navigate(routeName)}>
        <Text>{text}</Text>
       </TouchableOpacity>
)
}

export default withNavigation(NavLink)