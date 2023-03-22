import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const TaskScreen = ({ route }) => {
    const selectedTask = useSelector((state) => state.selectedTask);
    const { task } = route.params;
    const [subtasks, setSubtasks] = useState(task.subtasks || []);
    const [newSubtask, setNewSubtask] = useState('');
  
    const addSubtask = () => {
      if (newSubtask.trim() !== '') {
        setSubtasks([...subtasks, { id: subtasks.length + 1, title: newSubtask.trim() }]);
        setNewSubtask('');
      }
    };
  
    const renderItem = ({ item }) => (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    );
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{task.title}</Text>
        <FlatList
          data={subtasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <TextInput
          style={styles.input}
          onChangeText={setNewSubtask}
          value={newSubtask}
          placeholder="Add a new subtask"
        />
        <Button title="Add Subtask" onPress={addSubtask} />
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

export default TaskScreen;
