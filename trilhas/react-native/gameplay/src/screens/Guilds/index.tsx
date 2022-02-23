import React from "react";
import { View, FlatList } from "react-native";
import Guild, { GuildProps } from "../../components/Guild";
import ListDivider from "../../components/ListDivider";

import styles from './styles';

type Props = {
    handleGuildSelect: (Guild: GuildProps) => void;
}

const Guilds: React.FC<Props> = ({ handleGuildSelect }) => {

    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'https://avatars.githubusercontent.com/u/89089202?v=4',
            owner: true,
        },

        {
            id: '2',
            name: 'Boleiros do Bairro',
            icon: 'https://avatars.githubusercontent.com/u/12619438?v=4',
            owner: true,
        }
    ]

    return(
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <ListDivider isCentered/>}
                ListHeaderComponent={() => <ListDivider isCentered/>}
                showsVerticalScrollIndicator={false}
                style={styles.guilds}
                contentContainerStyle={{ paddingBottom: 69, paddingTop: 103 }}
                renderItem={({item}) => (
                    <Guild data={item} onPress={() => handleGuildSelect(item)} />
                )}
            />
        </View>
    );
}

export default Guilds;