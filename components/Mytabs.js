import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Settings from './Settings';
import Chat from './Chat';
import LoginScreen from './LoginScreen';


const Tab = createBottomTabNavigator();

export default function Mytabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  );
}