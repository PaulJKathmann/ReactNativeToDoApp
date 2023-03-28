import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions/authActions';


const CustomDrawerContent = (props) => {
    const { navigation } = props;
    const isSignedIn = useSelector((state) => state.auth.isSignedIn);
    dispatch = useDispatch();
    let token = useSelector((state) => state.auth.token);
  
    const handleLogout = () => {
      // Your logout logic here (e.g., remove authentication tokens, etc.)
      dispatch(logoutUser(token));
      // Navigate to the login screen or any other screen after logout
      navigation.navigate('Login');
    };
  
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Logout" onPress={handleLogout} />
      </DrawerContentScrollView>
    );
};

export default CustomDrawerContent;
  