import React from "react";
import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import styles from './styles';
import PlayerSvg from '../../assets/player.svg';
import CalenderSvg from '../../assets/calendar.svg';
import { categories } from "../../utils/categories";
import { theme } from "../../global/styles/theme";
import Avatar from "../Avatar";


export type MemberProps = {
    id: string,
    username: string,
    avatar_url: string;
    status: string;
}

type Props = TouchableOpacityProps & {
    data: MemberProps;
}

const Member: React.FC<Props> = ({ data, ...rest }) => {
    const { on, primary } = theme.colors;
    const { username, avatar_url, status } = data;
    const isOnline = status === 'online';

    return(
        <TouchableOpacity
            {...rest}
            >
            <View style={styles.container}>
                <Avatar urlImage={avatar_url}/>
                
                <View>
                    <Text style={styles.title}>
                        { username }
                    </Text>

                    <View style={styles.status}>
                        <View
                            style={[
                                styles.bulletStatus,
                                {
                                    backgroundColor: isOnline ? on : primary
                                }
                            ]}
                        />

                        <Text style={styles.nameStatus}>
                            { isOnline ? 'Disponível' : 'Ocupado' }
                        </Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    );
}

export default Member;