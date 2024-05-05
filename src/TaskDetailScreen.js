// TaskDetailScreen.js
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TaskContext } from './TaskContext';

const TaskDetailScreen = ({ route, navigation }) => {
  const { task } = route.params;
  const { tasks, setTasks } = useContext(TaskContext);

  const markTaskCompleted = () => {
    const updatedTasks = tasks.map(t => {
      if (t.id === task.id) {
        return { ...t, completed: true };
      }
      return t;
    });
    setTasks(updatedTasks);
    navigation.goBack();
  };

  const deleteTask = () => {
    const updatedTasks = tasks.filter(t => t.id !== task.id);
    setTasks(updatedTasks);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description:</Text>
      <Text style={styles.text}>{task.description}</Text>
      <Text style={styles.label}>Subject:</Text>
      <Text style={styles.text}>{task.subject}</Text>
      <Text style={styles.label}>Due Date:</Text>
      <Text style={styles.text}>{task.dueDate}</Text>
      {task.completed ? (
        <Text style={styles.completed}>Completed</Text>
      ) : (
        <Button title="Mark as Completed" onPress={markTaskCompleted} style={styles.button} />
      )}
      <Button title="Delete Task" onPress={deleteTask} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
  completed: {
    fontSize: 16,
    color: 'green',
    marginBottom: 10,
  },
});

export default TaskDetailScreen;
