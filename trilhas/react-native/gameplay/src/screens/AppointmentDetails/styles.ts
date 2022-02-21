import { StyleSheet } from "react-native";
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from "../../global/styles/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    banner: {
        width: '100%',
        height: 234,
        marginBottom: 30,
    },

    bannerContent: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom: 30,
    },

    content: {
        marginTop: 42,   
    },

    title: {
        fontSize: 28,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
    },

    subtitle: {
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading,
    },

    matches: {
        marginTop: 24,
        marginLeft: 24,
    },

    footer:{
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace(),
    }
});

export default styles;
