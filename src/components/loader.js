import { ActivityIndicator, View } from "react-native";

const Loader = () => {
    return (
        <View style={{ alignSelf: 'stretch' }}>
            <ActivityIndicator size='large' />
        </View>
    )
}

export default Loader;