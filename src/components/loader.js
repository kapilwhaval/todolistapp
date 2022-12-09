import { ActivityIndicator, View } from "react-native";

const Loader = () => {
    return (
        <View style={{ alignSelf: 'stretch', marginVertical: 20 }}>
            <ActivityIndicator size='large' />
        </View>
    )
}

export default Loader;