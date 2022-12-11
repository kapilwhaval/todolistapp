import { Formik } from "formik";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { SubmitButton } from "../components/buttons";
import toastMessage from '../components/toast';
import Loader from '../components/loader';
import Header from "../components/header";
import { FormInput } from '../components/text-input';
import * as Yup from 'yup';
import { useState } from "react";
import { addTask, deleteTask, updateTask } from "../apis";

const AddTask = ({ navigation, route }) => {

    const { user, token } = useSelector(state => state.userDetails);
    const [serverError, setServerError] = useState('');
    const [loading, setLoading] = useState(false);

    const initialValues = route.params?.taskToEdit || { user: user._id, title: "", description: "", status: "pending" }

    const validationSchema = () => Yup.object().shape({
        title: Yup.string().required('Please enter title'),
        description: Yup.string().required('Please enter description')
    })

    const onSubmit = (values) => {
        setLoading(true);
        setServerError('');
        if (route.params?.taskToEdit) {
            updateTask(values, token)
                .then(res => {
                    setLoading(false);
                    navigation.goBack();
                    route.params?.onTaskUpdate(res);
                })
                .catch(err => {
                    setLoading(false);
                    setServerError(err.response?.data?.message || 'Something went wrong')
                })
        }
        else {
            addTask(values, token)
                .then(res => {
                    setLoading(false);
                    navigation.goBack();
                    route.params?.onAddingNewTask(res);
                })
                .catch(err => {
                    setLoading(false);
                    setServerError(err.response?.data?.message || 'Something went wrong')
                })
        }
    }

    const onDelete = () => {
        setLoading(true)
        deleteTask(route.params?.taskToEdit._id, token)
            .then(res => {
                setLoading(false)
                toastMessage('success', 'Task Deleted Successfully');
                navigation.goBack();
            })
            .catch(err => {
                setLoading(false);
                toastMessage('error', err.response?.data?.message || 'Something went wrong');
            })
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ values, errors, handleChange, handleSubmit, isValid, dirty }) => (
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <Header heading='Add Task' />
                    <FormInput error={errors.title ? errors.title : null} onChange={handleChange('title')} value={values.title} placeholder='Title' />
                    <FormInput error={errors.description ? errors.description : null} onChange={handleChange('description')} value={values.description} placeholder='Description' noOfLines={10} />
                    <View style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
                        {serverError ? <Text style={{ color: 'red', marginVertical: 10, alignSelf: 'center' }}>{serverError}</Text> : null}
                        {loading ? <Loader /> : <SubmitButton disabled={!(isValid && dirty)} title={route.params?.taskToEdit ? 'Update' : 'Add'} onPress={handleSubmit} />}
                        {route.params?.taskToEdit && !loading ? <SubmitButton disabled={false} danger title={'Delete'} onPress={onDelete} /> : null}
                    </View>
                </View>
            )}
        </Formik>
    );
}

export default AddTask;