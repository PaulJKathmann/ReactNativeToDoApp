import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { getTaskById } from '../selectors/tasks';
import { getSubtasksByTaskId } from '../selectors/subtasks';
import Subtask from '../components/Subtask';
import SubtaskInput from '../components/SubtaskInput';

const TaskScreen = ({ route }) => {
    const { taskId } = route.params;
    task = useSelector((state) => getTaskById(state, taskId));
    subtasks = useSelector((state) => getSubtasksByTaskId(state, taskId));

    return (
      <View style={styles.container}>
        <ScrollView >
            <Text style={styles.title}>{task.name}</Text>
            <FlatList
                data={subtasks}
                renderItem={({ item }) => <Subtask subtaskId={item.id} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </ScrollView>
        <SubtaskInput taskId={taskId} />
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
  const task = getTaskById(state, ownProps.route.params.taskId);
  const subtasks = getSubtasksByTaskId(state, ownProps.route.params.taskId);
  return { task, subtasks };
};

export default connect(mapStateToProps)(TaskScreen);

