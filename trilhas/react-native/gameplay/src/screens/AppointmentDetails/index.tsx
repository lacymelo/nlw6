import React, { useEffect } from "react";
import { View, Text, Image, ImageBackground, FlatList, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";

import styles from './styles';
import { Fontisto } from '@expo/vector-icons'; 
import { theme } from "../../global/styles/theme";
import BannerImg from '../../assets/banner.png';

//componentes
import Background from '../../components/Background';
import ListHeader from "../../components/ListHeader";
import Header from "../../components/Header";
import Member from "../../components/Member";
import ListDivider from "../../components/ListDivider";
import ButtonIcon from "../../components/ButtonIcon";

interface Params{
    id: number;
}

const AppointmentCreate = () => {
    const route = useRoute();
    const routeParams = route.params as Params;
    const { id } = routeParams;

    const members = [
        {
            id: '1',
            username: 'Laciene',
            avatar_url: 'https://avatars.githubusercontent.com/u/89089202?v=4',
            status: 'online'
        },
        {
            id: '2',
            username: 'Leonardo',
            avatar_url: 'https://avatars.githubusercontent.com/u/12619438?v=4',
            status: 'offline'
        }
    ]

    // useEffect(() => {
    //     console.log(id);
    // }, [id]);


    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <TouchableOpacity>
                        <Fontisto name="share" size={24} color={theme.colors.primary} />
                    </TouchableOpacity>
                }
            />

            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}> 
                        Lendários
                    </Text>

                    <Text style={styles.subtitle}>
                        É hoje vamos chegar ao challenger sem perder uma partida da md10
                    </Text>
                </View>
            </ImageBackground>

            <ListHeader
                title="Partidas agendadas"
                subtitle="Total 6"
            />

            <FlatList
                style={styles.matches}
                showsVerticalScrollIndicator={false}
                data={members}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                renderItem={({item}) => (
                    <Member
                        data={item}
                    />
                )}
            />

            <View style={styles.footer}>
                <ButtonIcon
                    title="Entrar na partida"
                />
            </View>
        </Background>
    );
}

export default AppointmentCreate;