import React from "react";
import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';
import { theme } from "../../global/styles/theme";

type ButtonProps = TouchableOpacityProps & {
    title?: string;
    toChange?: boolean;
}

const ButtonModal: React.FC<ButtonProps> = ({ title, toChange, ...rest }) => {
    return(
        <TouchableOpacity
            style={[styles.container,
                toChange ? styles.button : false         
            ]}
            activeOpacity={0.7}
            {...rest}
            >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

export default ButtonModal;