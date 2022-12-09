import { StyleSheet, TextInput, View } from "react-native";
import colors from "../constants/colors";

export const AuthInput = ({ placeholder, onChange, value, error, secured }) => {
    return (
        <View style={[styles.authInputContainer, {borderColor: error ? colors.red : colors.lightGray}]}>
            <TextInput secureTextEntry={secured} autoCapitalize="none" onChangeText={onChange} value={value} placeholder={placeholder} style={styles.authInput} />
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
        borderRadius: 10,
        height: 50
    },
    authInput: {
        color: colors.black,
        alignSelf: 'stretch',
        flex:1,
        fontSize: 16
    }
})