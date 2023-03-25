import React, {useState, useEffect} from 'react';
import { FlatList, Text, View, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { fetchTasksAction, addTask, updateTask, deleteTask, setSelectedTask } from '../actions/taskActions';
import { useDispatch, useSelector } from 'react-redux';
import Task from '../components/Task';
import { getAllTasks } from '../selectors/tasks';
import TaskInput from '../components/TaskInput';


const TaskList = () => {
    const [text, setText] = useState(''); 
    const dispatch = useDispatch();
    const tasks = useSelector((state) => getAllTasks(state));
  
    useEffect(() => {
      dispatch(fetchTasksAction());
    }, [dispatch]); 

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.sectionTitle}>Today's Tasks</Text>
                <FlatList
                    data={tasks}
                    renderItem={({ item }) => <Task taskId={item.id} />}
                    keyExtractor={(item) => item.id.toString()}
                /> 
            </View>
            <TaskInput />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee',
    },
    tasksWrapper: {
     paddingTop: 80,
     paddingHorizontal: 20
    },
    sectionTitle: {
      fontSize: 24,
      paddingTop: 20,
      paddingBottom: 20,
      marginLeft: 24,
      fontWeight: 'bold',
    },
    items: {
      marginTop: 30
    },
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

const mapStateToProps = (state) => ({
    tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
    fetchTasksAction: () => dispatch(fetchTasksAction()),
    createTask: (task) => dispatch(addTask(task.name)),
    updateTask: (id, name, completed) => dispatch(updateTask(id, name, completed)),
    deleteTask: (id) => dispatch(deleteTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);