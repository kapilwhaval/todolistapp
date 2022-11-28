import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const AddButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>Add Task</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: { position: 'absolute', flex:1, bottom: 0, height: 60, width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'green', flex:1, borderTopLeftRadius: 10, borderTopRightRadius: 10 },
    text: { fontSize: 19, color: 'white' }
})

export default AddButton;