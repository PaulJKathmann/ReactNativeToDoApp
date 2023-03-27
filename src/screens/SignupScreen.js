import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';


const SignupScreen = () => {
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
            <Button style={styles.button} onPress={_submitLogin}>Sign Up</Button>
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
    button: {
        backgroundColor: '#b76c94',
        color: '#fff',
        padding: 10,
        marginTop: 10,
    }
});

export default SignupScreen;