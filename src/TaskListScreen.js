// TaskListScreen.js
import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { TaskContext } from './TaskContext';

const TaskListScreen = ({ navigation }) => {
  const { tasks } = useContext(TaskContext);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('TaskDetail', { task: item })}>
      <View style={styles.task}>
        <Text style={styles.taskDescription}>{item.description}</Text>
        <Text style={styles.taskSubject}>{item.subject}</Text>
        <Text style={styles.taskDueDate}>Due Date: {item.dueDate}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleAddTask = () => {
    navigation.navigate('AddTask');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text>No tasks available</Text>}
      />
      <View style={styles.addButtonContainer}>
        <Button title="Add Task" onPress={handleAddTask} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  task: {
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  taskDescription: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  taskSubject: {
    fontSize: 16,
    marginBottom: 5,
  },
  taskDueDate: {
    fontSize: 14,
    color: 'gray',
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
});

export default TaskListScreen;
