import { StyleSheet, Text, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import store from './src/reducers/store';
import TaskList from './src/screens/TaskListScreen';
import TaskScreen from './src/screens/TaskScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const Stack = createStackNavigator();

function MyStack() {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator>
       {isSignedIn ? (
        <>
          <Stack.Screen name="TaskList" component={TaskList} />
          <Stack.Screen name="TaskScreen" component={TaskScreen} />
        </>
        ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Sign Up" component={SignupScreen} />
        </>
        )}
      </Stack.Navigator>  
    </NavigationContainer>
  );
}

export default function App() {
  
  return (
    <Provider store={store}>
        <MyStack />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
