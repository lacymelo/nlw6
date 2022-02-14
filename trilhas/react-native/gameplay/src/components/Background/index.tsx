import React, { ReactNode } from "react";
import { Text } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import styles from './styles';
import { theme } from "../../global/styles/theme";

type Props = {
    children: ReactNode;
}

const Background: React.FC<Props> = ({ children }) => {

    const { secondary80, secondary100 } = theme.colors;

    return (
        <LinearGradient
            style={styles.container}
            colors={
                [secondary100, secondary80]
            }
        >
            {children}
        </LinearGradient>
    );
}

export default Background;
