import React, { ReactNode } from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import { theme } from "../../global/styles/theme";

type Props = {
    title: string;
    action?: ReactNode;
}

const Header: React.FC<Props> = ({ title, action }) => {
    const { goBack } = useNavigation();
    const { secondary100, secondary40, heading } = theme.colors;

    function handleGoBack(){
        goBack();
    }

    return(
        <LinearGradient
            style={styles.container}
            colors={[
                secondary100, secondary40
            ]}
        >
            <TouchableOpacity>
                <Feather name="arrow-left" size={24} color={heading} onPress={goBack} />
            </TouchableOpacity>

            <Text style={styles.title}>
                {title}
            </Text>

            {
                action &&
                <Text>
                    {action}
                </Text>
            }


        </LinearGradient>
    );
}

export default Header;