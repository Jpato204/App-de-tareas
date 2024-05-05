// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TaskProvider } from './src/TaskContext';
import TaskListScreen from './src/TaskListScreen';
import TaskDetailScreen from './src/TaskDetailScreen';
import AddTaskScreen from './src/AddTaskScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <TaskProvider>
                <Stack.Navigator initialRouteName="TaskList">
                    <Stack.Screen name="TaskList" component={TaskListScreen} />
                    <Stack.Screen name="TaskDetail" component={TaskDetailScreen} />
                    <Stack.Screen name="AddTask" component={AddTaskScreen} />
                </Stack.Navigator>
            </TaskProvider>
        </NavigationContainer>
    );
};

export default App;
