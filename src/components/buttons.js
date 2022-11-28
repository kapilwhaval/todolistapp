import { Keyboard, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

export const SubmitButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={() => {Keyboard.dismiss(); onPress()}} style={styles.submitButtonContainer}>
            <Text style={styles.submitButtonTitle}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    submitButtonContainer: { backgroundColor: colors.blue, alignSelf:'stretch',marginHorizontal: 20, height: 50, borderRadius: 10, justifyContent:'center',alignItems:'center', marginVertical: 10 },
    submitButtonTitle: {color:colors.white, fontSize: 16}
})