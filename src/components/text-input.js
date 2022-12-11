import { StyleSheet, TextInput, View } from "react-native";
import colors from "../constants/colors";

export const AuthInput = ({ placeholder, onChange, value, error, secured }) => {
    return (
        <View style={[styles.authInputContainer, { borderColor: error ? colors.red : colors.lightGray }]}>
            <TextInput secureTextEntry={secured} autoCapitalize="none" onChangeText={onChange} value={value} placeholder={placeholder} style={styles.authInput} />
        </View>
    );
}

export const FormInput = ({ placeholder, onChange, value, error, secured, noOfLines }) => {
    return (
        <View style={[styles.formInputContainer, { borderBottomColor: error ? colors.red : colors.lightGray, height: noOfLines ? 100 : 50 }]}>
            <TextInput multiline={noOfLines ? true : false} numberOfLines={noOfLines || 1} secureTextEntry={secured} autoCapitalize="none" onChangeText={onChange} value={value} placeholder={placeholder} style={styles.authInput} />
        </View>
    );
}

const styles = StyleSheet.create({
    authInputContainer: {
        borderWidth: 1,
        backgroundColor: colors.backgroundGray,
        alignSelf: 'stretch',
        paddingHorizontal: 15,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 10
    },
    authInput: {
        color: colors.black,
        alignSelf: 'stretch',
        flex: 1,
        fontSize: 16
    },
    formInputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGray,
        alignSelf: 'stretch',
        paddingHorizontal: 15,
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        height: 50
    }
})