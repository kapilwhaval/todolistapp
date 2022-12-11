import { Keyboard, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

export const SubmitButton = ({ title, onPress, disabled }) => {
    return (
        <TouchableOpacity disabled={disabled} onPress={() => {Keyboard.dismiss(); onPress()}} style={[styles.submitButtonContainer, {opacity: disabled ? 0.5: 1}]}>
            <Text style={styles.submitButtonTitle}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    submitButtonContainer: { backgroundColor: colors.blue, alignSelf:'stretch',marginHorizontal: 20, height: 50, borderRadius: 10, justifyContent:'center',alignItems:'center', marginVertical: 10 },
    submitButtonTitle: {color:colors.white, fontSize: 16}
})