import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet } from 'react-native';
import { addSubtask } from '../actions/subtaskActions';

const SubtaskInput = ({ taskId }) => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    _createSubtask = () => { 
        const subtaskName = text; 
        dispatch(addSubtask(taskId, subtaskName));  
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
      bottom: 60,
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
      borderColor: '#c0c0c0',
      borderWidth: 1,
      width: 250,
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },   
  });

export default SubtaskInput;