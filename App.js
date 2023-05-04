import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import { Provider } from 'react-redux';
import store from './src/store';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/screens/Home';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
       <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
     </Provider> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // display:'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
