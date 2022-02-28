import React from "react";
import { View, Image} from "react-native";
import { CDN_IMAGE } from "../../configs";

import styles from './styles';
import Discord from '../../assets/discord.svg';

interface Props {
    guildId: string;
    iconId: string | null;
}

const GuildIcon: React.FC<Props> = ({ guildId, iconId }) => {
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;

    return(
        <View style={styles.container}>
            {
                iconId ? 
                    <Image
                        source={{
                            uri: uri,
                        }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                :   
                    <Discord
                        width={40}
                        height={40}
                    />
                    
            }
        </View>
    );
}

export default GuildIcon;