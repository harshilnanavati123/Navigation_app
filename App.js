import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import AccountScreen from "./src/Screen/AccountScreen";
import SigninScreen from "./src/Screen/SigninScreen";
import SignupScreen from "./src/Screen/SignupScreen";
import TrackCreateScreen from "./src/Screen/TrackCreateScreen";
import TrackDetailScreen from "./src/Screen/TrackDetailScreen";
import TrackListScreen from "./src/Screen/TrackListScreen";
import {Provider as AuthProvider} from './src/context/AuthContext'
import {Provider as LocationProvider} from './src/context/LocationContext'
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/Screen/ResolveAuthScreen'
import {Provider as TrackProvider} from './src/context/trackContext'
import {FontAwesome} from "@expo/vector-icons"
const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
})
trackListFlow.navigationOptions = {
  title:'Tracks',
  tabBarIcon:<FontAwesome name='th-list' size={20}/>
}
const switchNavigator = createSwitchNavigator({
  ResolveAuth:ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createMaterialBottomTabNavigator({
    trackListFlow,
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
})

const App =  createAppContainer(switchNavigator)

export default ()=>{
  return(
    <TrackProvider>
    <LocationProvider>
    <AuthProvider>
      <App ref={(navigator)=>{setNavigator(navigator)}}/>
    </AuthProvider>
    </LocationProvider>
    </TrackProvider>
  )
}
