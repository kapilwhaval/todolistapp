import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

const Header = ({ heading, right }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{heading}</Text>
            {right}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { width: '100%', height: 50, backgroundColor: colors.blue, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 },
    heading: { fontSize: 20, color: colors.white }
})

export default Header;