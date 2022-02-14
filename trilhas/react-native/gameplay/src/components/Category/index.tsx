import React from "react";
import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

import styles from './styles';
import { theme } from "../../global/styles/theme";

type Props = TouchableOpacityProps & {
    title: string;
    icon: React.FC<SvgProps>;
    checked?: boolean;
}

const Category: React.FC<Props> = ({ title, icon: Icon, checked, ...rest }) => {
    const { secondary50, secondary70 } = theme.colors;

    return (
        <LinearGradient
            style={styles.container}
            colors={
                [secondary50, secondary70]
            }
        >
            <TouchableOpacity
                {...rest}
            >
                <View
                    style={[
                        styles.content, { opacity: checked ? 1 : 0.4 }
                    ]}
                >
                    <View style={checked ? styles.checked : styles.check} />
                    <Icon
                        width={48}
                        height={48}
                    />

                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        </LinearGradient>
    );
}

export default Category;