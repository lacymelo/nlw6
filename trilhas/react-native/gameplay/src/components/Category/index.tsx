import React from "react";
import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

import styles from './styles';
import { theme } from "../../global/styles/theme";

type Props = TouchableOpacityProps & {
    title: string;
    icon: React.FC<SvgProps>;
    hasCheckBox?: boolean;
    checked?: boolean;
}

const Category: React.FC<Props> = ({ title, icon: Icon, checked, hasCheckBox, ...rest }) => {
    const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;

    return (
        <TouchableOpacity
            {...rest}
        >
            <LinearGradient
                style={styles.container}
                colors={
                    [secondary50, secondary70]
                }
            >

                <LinearGradient
                    style={[
                        styles.content, { opacity: checked ? 1 : 0.5 }
                    ]}
                    colors={[
                        checked ? secondary85 : secondary40, secondary50
                    ]}
                >
                    {
                        hasCheckBox && (
                            <View style={checked ? styles.checked : styles.check} />
                        )
                    }

                    <Icon
                        width={48}
                        height={48}
                    />

                    <Text style={styles.title}>
                        {title}
                    </Text>
                </LinearGradient>
            </LinearGradient>
        </TouchableOpacity>
    );
}

export default Category;