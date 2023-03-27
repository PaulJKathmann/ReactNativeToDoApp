import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { completeTask, setSelectedTask, deleteTask } from '../actions/taskActions';
import { useNavigation } from '@react-navigation/native';

const Task = ({taskId}) => {
    const dispatch = useDispatch();
    const task = useSelector(state => state.tasks.byId[taskId]);
    const navigation = useNavigation();
    let token = useSelector((state) => state.auth.token);

    const _completeTask = () => {
        if (task) {
            const updatedTask = { id: task.id, completed: !task.completed };
            dispatch(completeTask(updatedTask, token));
        }
    }
    const _handleTaskPress = () => {
        dispatch(setSelectedTask(task));
        console.log("Task pressed");
        navigation.navigate("TaskScreen", { taskId });
    };

    const _deleteTask = () => {
        console.log("Delete Task");
        dispatch(deleteTask(task.id));
    };

    const textStyle = task.completed ? [styles.itemText, styles.crossedText] : styles.itemText;
    const squareStyle = task.completed ? [styles.square, styles.completedSquare] : styles.square;

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={squareStyle} onPress={_completeTask}>
                </TouchableOpacity>
                <Text style={textStyle} onPress={_handleTaskPress}>
                    {task.name}
                </Text>
            </View>
            <TouchableOpacity style={styles.circular} onPress={_deleteTask} ></TouchableOpacity>
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
        borderColor: 'red',
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

export default Task;
