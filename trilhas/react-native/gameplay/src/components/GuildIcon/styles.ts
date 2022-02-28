import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const styles = StyleSheet.create({
    container: {
        width: 63,
        height: 67,
        borderRadius: 8,
        backgroundColor: theme.colors.discord,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },

    image: {
        width: 63,
        height: 67,
    },
});

export default styles;

