import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {removeUser} from '../redux/reducers/user';
import { useDispatch } from "react-redux";
import colors from "../constants/colors";

const Header = ({heading}) => {

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(removeUser())
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{heading}</Text>
            <TouchableOpacity onPress={logout}><Text style={styles.heading}>Logout</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {width: '100%', height: 50, borderBottomWidth: 1, borderBottomColor: colors.lightGray, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal: 20},
    heading: {fontSize: 20, color: colors.black}
})

export default Header;