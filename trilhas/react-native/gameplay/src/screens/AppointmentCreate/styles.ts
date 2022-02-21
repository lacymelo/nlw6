import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    label: {
       fontSize: 18,
       fontFamily: theme.fonts.title700,
       color: theme.colors.heading, 
    },

    labelContent: {
        marginLeft: 24,
        marginTop: 36,
        marginBottom: 18,
    },

    form: {
        paddingHorizontal: 24,
        marginTop: 32,
    },

    select: {
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
        height: 68,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        paddingRight: 25,
        overflow: 'hidden',
    },

    selectBody:{
        flex: 1,
        alignItems: "center", 
    },

    image: {
        width: 64,
        height: 68,
        backgroundColor: theme.colors.secondary50,
        borderRadius: 8,
    },

    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },

    column: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    divider: {
        marginRight: 4,
        fontSize: 18,
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
    },

    caracteresLimit: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight,
    },

    footer: {
        marginVertical: 20,
        marginBottom: 120,
    }

});

export default styles;

