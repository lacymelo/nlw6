import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const styles = StyleSheet.create({
    container: {
        height: 48,
        width: '49%',
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        color: theme.colors.heading,
    },

    button: {
        backgroundColor: theme.colors.secondary100,
        borderWidth: 1,
        borderColor: theme.colors.secondary40,
    },
});

export default styles;

