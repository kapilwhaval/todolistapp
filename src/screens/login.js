import { Text, View } from "react-native";
import { SubmitButton } from "../components/buttons";
import { AuthInput } from "../components/text-input";

const Login = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <AuthInput placeholder='Email' />
            <AuthInput placeholder='Password' />
            <SubmitButton title='Login' />
        </View>
    );
}

export default Login;