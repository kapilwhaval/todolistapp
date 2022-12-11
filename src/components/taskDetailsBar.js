import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

const TaskDetailsBar = ({ task }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{task.title}</Text>
            <Text style={styles.text}>{task.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { borderWidth: 1, borderColor: colors.lightGray, borderRadius: 10, marginBottom: 10, paddingHorizontal: 20, paddingVertical: 10 },
    text: {}
})

export default TaskDetailsBar;