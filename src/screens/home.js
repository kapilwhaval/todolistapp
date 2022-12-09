import React, { useState } from 'react';
import { View } from 'react-native';
import { SubmitButton } from '../components/buttons';
import Header from '../components/header';

const Home = () => {

    const [tasks, setTasks] = useState([]);

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Header heading='Todo List' />
            <View style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
                <SubmitButton title='Add Task' />
            </View>
        </View>
    );
}

export default Home;