import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import GuildIcon from "../GuildIcon";
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import { theme } from "../../global/styles/theme";

export type GuildProps = {
    id: string;
    name: string;
    icon: string;
    owner: boolean;
}

type Props =  TouchableOpacityProps &{
    data: GuildProps
}

const Guild: React.FC<Props> = ({ data, ...rest }) => {
    return(
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            {...rest}
        >  

            <GuildIcon urlImg={data.icon}/> 

            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>
                        {data.name}
                    </Text>

                    <Text style={styles.type}>
                        { data.owner ? 'Administrador' : 'Convidado' }
                    </Text>
                </View>
            </View>

            <Feather
                name="chevron-right"
                color={theme.colors.heading}
                size={24}
            />

        </TouchableOpacity>
    );
}

export default Guild;