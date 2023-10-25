import { StyleSheet, Text, View } from 'react-native';
import {styles} from './assets/styles/allstyles'
import LoginScreen from './components/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import Settings from './components/Settings';
import Chat from './components/Chat';
import Mytabs from './components/Mytabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Mytabs'
      >
        <Stack.Screen name="Mytabs"  component={Mytabs}  option={{tittle:'Menu'}}/>
        <Stack.Screen name="Login" component={LoginScreen} option={{tittle:'Inicio de sesion'}} />
        <Stack.Screen name="Home"  component={HomeScreen}  option={{tittle:'Pantalla Principal'}}/>
        <Stack.Screen name="Chat" component={Chat} option={{tittle:'Chat'}} />
        <Stack.Screen name="Settings"  component={Settings}  option={{tittle:'Configuraciones'}}/>
        

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


