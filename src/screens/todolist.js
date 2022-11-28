import React, { useState } from 'react';
import { View } from 'react-native';
import AddButton from '../components/add-button';

const TodoList = () => {

    const [tasks, setTasks] = useState([]);

    return (
        <View style={{flex:1}}>
            <AddButton />
        </View>
    );
}

export default TodoList;