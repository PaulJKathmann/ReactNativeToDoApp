import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { getTaskById } from './selectors/tasks';
import { getSubtasksByTaskId } from './selectors/subtasks';

const TaskScreen = ({ taskId }) => {

    task = useSelector((state) => getTaskById(state, taskId));
    subtasks = useSelector((state) => getSubtasksByTaskId(state, taskId));
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{task.name}</Text>
            {subtasks.map((subtask) => (
              <Subtask key={subtask.id} subtask={subtask} />
            ))}
        </View>
    );
};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    item: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    itemText: {
      fontSize: 16,
    },
    
});

const mapStateToProps = (state, ownProps) => {
  const task = getTaskById(state, ownProps.id);
  const subtasks = getSubtasksByTaskId(state, ownProps.id);
  return { task, subtasks };
};

export default connect(mapStateToProps)(TaskScreen);

