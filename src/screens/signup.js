import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { signUp } from "../apis";
import { SubmitButton } from "../components/buttons";
import Loader from "../components/loader";
import { AuthInput } from "../components/text-input";
import colors from "../constants/colors";
import { setUser } from "../redux/reducers/user";
import routes from '../constants/routes'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import toastMessage from "../components/toast";

const Signup = ({ navigation }) => {

    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState('');
    const dispatch = useDispatch();

    const initialValues = { first_name: 'Kapil', last_name: 'Whaval', email: 'whavalkapil@gmail.com', password: 'test0000' }

    const validationSchema = () => Yup.object().shape({
        email: Yup.string().required('Please enter email').email("Invalid Email"),
        password: Yup.string().required('Please enter password'),
        first_name: Yup.string().required('Please enter first name'),
        last_name: Yup.string().required('Please enter last name')
    })

    const onSubmit = (values) => {
        setLoading(true);
        setServerError('');
        signUp(values)
            .then(res => {
                setLoading(false);
                toastMessage('success', 'Account Created Successfully')
                dispatch(setUser(res));
            })
            .catch(err => {
                setLoading(false);
                setServerError(err.response?.data?.message || 'Something went wrong')
            })
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ values, errors, handleChange, handleSubmit }) => (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white }}>
                    <Text style={styles.heading}>Create an account</Text>
                    <AuthInput error={errors.first_name ? errors.first_name : null} onChange={handleChange('first_name')} value={values.first_name} placeholder='First Name' />
                    <AuthInput error={errors.last_name ? errors.last_name : null} onChange={handleChange('last_name')} value={values.last_name} placeholder='Last Name' />
                    <AuthInput error={errors.last_name ? errors.email : null} onChange={handleChange('email')} value={values.email} placeholder='Email' />
                    <AuthInput secured error={errors.password ? errors.password : null} onChange={handleChange('password')} value={values.password} placeholder='Password' />
                    {serverError ? <Text style={{ color: 'red', marginVertical: 10 }}>{serverError}</Text> : null}
                    {loading ? <Loader /> : <SubmitButton onPress={handleSubmit} title='Create Account' />}
                    <TouchableOpacity onPress={() => navigation.navigate(routes.login)}><Text style={styles.footer}>Already have an account? Login</Text></TouchableOpacity>
                </View>
            )}
        </Formik>
    );
}

const styles = StyleSheet.create({
    heading: { fontSize: 22, color: colors.black, fontWeight: 'bold', marginVertical: 10 },
    footer: { color: 'blue' }
})

export default Signup;