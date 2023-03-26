import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const _submitLogin = () => {
        dispatch(loginUser(email, password));
    }

    return (
        <View style={styles.container} >
            <Hoshi label={'Email'} style={styles.inputField} onChangeText={(email) => setEmail(email)} />
            <Hoshi label={'Password'} style={styles.inputField} onChangeText={(password) => setPassword(password)} />
            <Button onPress={_submitLogin}>Login</Button>
            <TouchableOpacity> 
                <Text style={styles.signUpLink}>Don't have an account? Sign up</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    inputField: {
        borderWidth: 1,
        borderColor: '#b76c94',
        backgroundColor: '#fff',
    },
    signUpLink: {
        color: '#b76c94',
        position: 'absolute',
        bottom: 20,
    },

});

export default LoginScreen;