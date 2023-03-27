import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet } from 'react-native';
import { addSubtask } from '../actions/subtaskActions';

const SubtaskInput = ({ taskId }) => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    let token = useSelector((state) => state.auth.token);

    _createSubtask = () => { 
        const subtaskName = text; 
        dispatch(addSubtask(taskId, subtaskName, token));
        setText("");
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height" } style={styles.writeTaskWrapper} >
            <TextInput style={styles.input} placeholder={'Write a task'} value={text} onChangeText={text => setText(text)} />
            <TouchableOpacity onPress={_createSubtask} >
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 20,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input: {
      paddingVertical: 16,
      paddingHorizontal: 16,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderWidth: 0,
      width: 260,
      shadowRadius: 10,
      shadowOffset: {
        width: 8,
        height: 8,
      },
      shadowColor: '#000',
      shadowOpacity: 0.25,
    },
    addWrapper: {
        width: 50,
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        shadowRadius: 10,
        shadowOffset: {
          width: 8,
          height: 8,
        },
        shadowColor: '#000',
        shadowOpacity: 0.25,
    },   
  });

export default SubtaskInput;