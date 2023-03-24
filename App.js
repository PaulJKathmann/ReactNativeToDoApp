import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/reducers/store';
import TaskList from './src/screens/TaskListScreen';
import TaskScreen from './src/screens/TaskScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TaskList" component={TaskList} />
        <Stack.Screen name="Task" component={TaskScreen} />
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
