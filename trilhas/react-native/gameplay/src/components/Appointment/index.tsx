import React from "react";
import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import styles from './styles';
import PlayerSvg from '../../assets/player.svg';
import CalenderSvg from '../../assets/calendar.svg';
import GuildIcon from "../GuildIcon";
import { categories } from "../../utils/categories";
import { theme } from "../../global/styles/theme";
import { GuildProps } from "../Guild";
import { LinearGradient } from "expo-linear-gradient";


export type AppointmentsProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

type Props = TouchableOpacityProps & {
    data: AppointmentsProps;
}

const Appointments: React.FC<Props> = ({ data, ...rest }) => {
    const [category] = categories.filter(item => item.id === data.category);
    const { primary, on, secondary50, secondary70 } = theme.colors;
    const { name, owner, icon } = data.guild;

    return(
        <TouchableOpacity
            {...rest}
            >
            <View style={styles.container}>
                <LinearGradient
                    style={styles.guildIconContainer}
                    colors={[secondary50, secondary70]}
                >
                    <GuildIcon guildId={data.guild.id} iconId={data.guild.icon}/>
                </LinearGradient>

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            {name}
                        </Text>

                        <Text style={styles.category}>
                            { category.title }
                        </Text>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalenderSvg/>

                            <Text style={styles.date}>
                                { data.date }
                            </Text>
                        </View>

                        <View style={styles.playersInfo}>
                            <PlayerSvg fill={ owner ? primary : on }/>

                            <Text style={[
                                styles.player,
                                {color: owner ? primary : on }
                            ]}>
                                { owner ? 'Anfitri??o' : 'Visitante' }
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default Appointments;