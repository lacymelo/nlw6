import React from "react";
import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from "react-native";

import DiscordImg from '../../assets/discord.png';
import styles from './styles';

type ButtonProps = TouchableOpacityProps & {
    title: string;
}

const Button: React.FC<ButtonProps> = ({ title, ...rest }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
            >

            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

export default Button;
