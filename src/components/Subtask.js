import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { updateSubtask } from './actions/subtasks';

const Subtask = ({subtask}) => {
    _completeSubtask = (id) => {
        if (subtask) {
            dispatch(updateSubtask(!subtask.completed));
        }  
    }
    const textStyle = subtask.completed ? [styles.itemText, styles.crossedText] : styles.itemText;
    const squareStyle = subtask.completed ? [styles.square, styles.completedSquare] : styles.square;

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={squareStyle} onPress={() => _completeSubtask(subtask.id)}>
                </TouchableOpacity>
                <Text style={textStyle}>
                    {subtask.name}
                </Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 16,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginRight: 24,
        marginLeft: 24,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 4,
        marginRight: 12,
    },
    itemText: {
        fontSize: 16,
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
    crossedText: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        textDecorationColor: '#000',
    },
    completedSquare: {
        backgroundColor: '#3B83AC',
    },
});

export default Subtask;
