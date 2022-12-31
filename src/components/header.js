import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../constants/colors";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";

const Header = ({ heading, right, showBack }) => {

    const { goBack } = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                {showBack ? <TouchableOpacity onPress={() => goBack()}><MaterialIcons name="chevron-left" color='white' size={33} /></TouchableOpacity> : null}
                <Text style={styles.heading}>{heading}</Text>
            </View>
            {right}
        </View>
    );
}

const styles = StyleSheet.create({
    row: { flexDirection: 'row', alignItems: 'center' },
    container: { width: '100%', height: 50, backgroundColor: colors.blue, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 },
    heading: { fontSize: 20, color: colors.white }
})

export default Header;