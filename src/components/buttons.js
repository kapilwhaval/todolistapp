import { Keyboard, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

export const SubmitButton = ({ title, onPress, disabled, danger }) => {
    return (
        <TouchableOpacity disabled={disabled} onPress={() => { Keyboard.dismiss(); onPress() }} style={[styles.submitButtonContainer, { opacity: disabled ? 0.5 : 1, backgroundColor: danger ? colors.red : colors.blue }]}>
            <Text style={styles.submitButtonTitle}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    submitButtonContainer: { alignSelf: 'stretch', marginHorizontal: 20, height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginVertical: 10 },
    submitButtonTitle: { color: colors.white, fontSize: 16 }
})