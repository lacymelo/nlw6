import React from "react";
import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';
import { theme } from "../../global/styles/theme";

type ButtonProps = TouchableOpacityProps & {
    title?: string;
}

const ButtonAdd: React.FC<ButtonProps> = ({ title, ...rest }) => {
    return(
        <TouchableOpacity
            style={styles.container}
            {...rest}
            >
            <MaterialCommunityIcons
                name="plus"
                size={24}
                color={theme.colors.heading} />
        </TouchableOpacity>
    );
}

export default ButtonAdd;