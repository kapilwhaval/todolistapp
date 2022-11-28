import { StyleSheet, TextInput, View } from "react-native";
import colors from "../constants/colors";

export const AuthInput = ({ placeholder }) => {
    return (
        <View style={styles.authInputContainer}>
            <TextInput placeholder={placeholder} style={styles.authInput} />
        </View>
    );
}

const styles = StyleSheet.create({
    authInputContainer: {
        borderWidth: 1,
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