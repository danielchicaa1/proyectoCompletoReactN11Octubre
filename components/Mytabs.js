import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Settings from './Settings';
import Chat from './Chat';
import LoginScreen from './LoginScreen';
import {MaterialIcons}from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

export default function Mytabs() {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown:false,
        tabBarInactiveTintColor:'gray',
        tabBarActiveTintColor:'red',
        tabBarActiveBackgroundColor:'purple'
    }}>
        

      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon:()=>(<MaterialIcons name='home' size="22" color="white"/>)
      }} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Login" component={LoginScreen} options={{tabBarStyle:{display:'none'}}} />
    </Tab.Navigator>
  );
}