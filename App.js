import { StyleSheet, Text, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import store from './src/reducers/store';
import TaskList from './src/screens/TaskListScreen';
import TaskScreen from './src/screens/TaskScreen';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './src/components/CustomDrawerContent';
import { TouchableOpacity, Image } from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const toggleDrawer = (navigation) => {
  navigation.dispatch(DrawerActions.toggleDrawer());
};

const TaskStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tasks" component={TaskList} />
      <Stack.Screen name="TaskScreen" component={TaskScreen} />
    </Stack.Navigator>
  );
};

const MyDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} >
      <Drawer.Screen name="Tasks" component={TaskStack} />
    </Drawer.Navigator>
  );
};

function MyStack() {
  const isSignedIn = useSelector((state) => state.auth.isSignedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator>
       {isSignedIn ? (
        <>
          <Stack.Screen name="Tasks" component={MyDrawer} options={({ navigation }) => ({
            headerShown: false, })} />
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
