import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";
import routes from "../constants/routes";

const TaskDetailsBar = ({ task, onDelete }) => {

    const { navigate } = useNavigation();
    const [taskDetails, setTaskDetails] = useState(task)

    const onTaskUpdate = (res) => {
        setTaskDetails(res)
    }

    return (
        <TouchableOpacity onPress={() => navigate(routes.addTask, { taskToEdit: taskDetails, onTaskUpdate, onDelete })} style={styles.container}>
            <Text style={[styles.text, styles.title]}>{taskDetails.title}</Text>
            <Text style={styles.text}>{taskDetails.description}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: { borderWidth: 1, borderColor: colors.lightGray, borderRadius: 10, marginBottom: 10, paddingHorizontal: 20, paddingVertical: 10 },
    text: { color: colors.black },
    title: { fontWeight: 'bold' }
})

export default TaskDetailsBar;