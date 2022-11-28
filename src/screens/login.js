import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { login } from "../apis";
import { SubmitButton } from "../components/buttons";
import Loader from "../components/loader";
import { AuthInput } from "../components/text-input";
import colors from "../constants/colors";
import { Formik } from 'formik';
import * as Yup from 'yup';

const Login = () => {

    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState('');

    const initialValues = { email: '', password: '' }

    const validationSchema = () => Yup.object().shape({
        email: Yup.string().required('Please enter email').email("Invalid Email"),
        password: Yup.string().required('Please enter password')
    })

    const onSubmit = (values) => {
        setLoading(true);
        setServerError('');
        login(values)
            .then(res => {
                setLoading(false);
                console.log(res.user, res.token)
            })
            .catch(err => { setLoading(false); setServerError(err.response?.data?.message || 'Something went wrong') })
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ values, errors, handleChange, handleSubmit }) => (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white }}>
                    <Text style={styles.heading}>Login to manage your todo list</Text>
                    <AuthInput error={errors.email ? errors.email : null} onChange={handleChange('email')} value={values.email} placeholder='Email' />
                    <AuthInput error={errors.password ? errors.password : null} onChange={handleChange('password')} value={values.password} placeholder='Password' />
                    {serverError ? <Text style={{ color: 'red', marginVertical: 10 }}>{serverError}</Text> : null}
                    {loading ? <Loader /> : <SubmitButton onPress={handleSubmit} title='Login' />}
                </View>
            )}
        </Formik>
    );
}

const styles = StyleSheet.create({
    heading: { fontSize: 22, color: colors.black, fontWeight: 'bold', marginVertical: 10 }
})

export default Login;