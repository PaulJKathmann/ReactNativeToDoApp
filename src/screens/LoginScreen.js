import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';
import Button from 'react-native-button';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const _submitLogin = () => {
        const user = { user: { email: email, password: password } };
        dispatch(loginUser(user));
    }

    const _goToSignUp = () => {
        console.log("Go to sign up");
        navigation.navigate("Sign Up");
    };

    return (
        <View style={styles.container} >
            <Hoshi label={'Email'} style={styles.inputField} onChangeText={(email) => setEmail(email)} />
            <Hoshi label={'Password'} style={styles.inputField} onChangeText={(password) => setPassword(password)} />
            <Button style={styles.button} onPress={_submitLogin}>Login</Button>
            <View style={styles.signUpLinkWrapper}>
                <TouchableOpacity onPress={_goToSignUp}> 
                    <Text>Don't have an account? Sign up</Text>
                </TouchableOpacity>
            </View>
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
        marginBottom: 10,
    },
    signUpLinkWrapper: {
        color: '#b76c94',
        position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        bottom: 20,
    },
    button: {
        backgroundColor: '#b76c94',
        color: '#fff',
        padding: 10,
        marginTop: 10,
    },
});

export default LoginScreen;