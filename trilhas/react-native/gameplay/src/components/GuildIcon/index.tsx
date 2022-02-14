import React from "react";
import { View, Image} from "react-native";

import styles from './styles';

interface Props {
    urlImg: string;
}

const GuildIcon: React.FC<Props> = ({ urlImg }) => {
    return(
        <Image
            source={{
                uri: urlImg,
            }}
            style={styles.image}
            resizeMode="cover"
        />
    );
}

export default GuildIcon;