import { StyleSheet } from "react-native"; 
import { theme } from "../../global/styles/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 650,
    },

    overlay: {
        flex: 1,
        backgroundColor: theme.colors.overlay,
    },

    modalContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 24,
    },

    contentTitle: {
        flexDirection: 'row',
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
    },

    subtitle: {
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.primary,
    },

    buttonContainer: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 12,
    },
});

export default styles;
