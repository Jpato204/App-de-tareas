// AddTaskScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { TaskContext } from './TaskContext';

const AddTaskScreen = ({ navigation }) => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [description, setDescription] = useState('');
  const [subject, setSubject] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleAddTask = () => {
    if (description && subject && dueDate) {
      const newTask = {
        id: Math.random().toString(),
        description,
        subject,
        dueDate,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      navigation.navigate('TaskList');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setDescription(text)}
        value={description}
      />
      <Text style={styles.label}>Subject:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setSubject(text)}
        value={subject}
      />
      <Text style={styles.label}>Due Date:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setDueDate(text)}
        value={dueDate}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
});

export default AddTaskScreen;
