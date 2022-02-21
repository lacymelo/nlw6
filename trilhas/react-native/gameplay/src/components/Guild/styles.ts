import { StyleSheet } from "react-native"; 
import { theme } from "../../global/styles/theme";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24,
    },

    content: {
        flex: 1,
        marginTop: 24,
    },

    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18,
        marginBottom: 11,
    },

    type: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13,
        marginBottom: 24, 
    },
});

export default styles;

