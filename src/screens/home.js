import { iteratorSymbol } from 'immer/dist/internal';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks } from '../apis';
import { SubmitButton } from '../components/buttons';
import Header from '../components/header';
import Loader from '../components/loader';
import TaskDetailsBar from '../components/taskDetailsBar';
import toastMessage from '../components/toast';
import colors from '../constants/colors';
import routes from '../constants/routes';
import { removeUser } from '../redux/reducers/user';

const Home = ({ navigation, route }) => {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const { token } = useSelector(state => state.userDetails);
    const dispatch = useDispatch();

    useEffect(() => {
        getAllTasks(null, token)
            .then(res => {
                setLoading(false);
                setTasks(res);
            })
            .catch(err => {
                setLoading(false);
                toastMessage('error', err.response?.data?.message || 'Something went wrong')
            })
    }, [])

    const logout = () => {
        dispatch(removeUser())
    }

    const onAddingNewTask = (newTask) => {
        setTasks([...tasks, newTask])
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Header heading='Todo List' right={<TouchableOpacity onPress={logout}><Text style={styles.logout}>Logout</Text></TouchableOpacity>} />
            {loading ? <Loader /> : null}
            <View style={styles.taskListContainer}>
                {tasks.map((task, index) => <TaskDetailsBar key={index} task={task} onDelete={() => setTasks(tasks.filter(filterItem => filterItem._id !== task._id))} />)}
            </View>
            <View style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
                <SubmitButton title='Add Task' onPress={() => navigation.navigate(routes.addTask, { onAddingNewTask })} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logout: { fontSize: 20, color: colors.white },
    taskListContainer: { paddingHorizontal: 20, paddingVertical: 10 }
})

export default Home;