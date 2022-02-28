import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, FlatList, TouchableOpacity, Alert, Share, Platform } from "react-native";
import { useRoute } from "@react-navigation/native";
import * as Linking from 'expo-linking';

import styles from './styles';
import { Fontisto } from '@expo/vector-icons'; 
import { theme } from "../../global/styles/theme";
import BannerImg from '../../assets/banner.png';

//componentes
import Background from '../../components/Background';
import ListHeader from "../../components/ListHeader";
import Header from "../../components/Header";
import Member, { MemberProps } from "../../components/Member";
import ListDivider from "../../components/ListDivider";
import ButtonIcon from "../../components/ButtonIcon";
import { AppointmentsProps } from "../../components/Appointment";
import api from "../../services/api";
import Load from "../../components/Load";

interface Params{
    guildSelected: AppointmentsProps;
}

type GuildWidget = {
   id: string;
   name: string;
   instant_invite: string;
   members: MemberProps[];
   presence_count: number;
}

const AppointmentCreate = () => {
    const route = useRoute();
    const [loading, setLoading] = useState(true);
    const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
    const routeParams = route.params as Params;
    const { guildSelected } = routeParams;

    async function fetchGuildInfo() {
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
            setWidget(response.data);

        } catch (error) {
            Alert.alert('Verifique as configurações do servidor.');
        } finally {
            setLoading(false);
        }
    }

    function handleShareInvitation(){
        const message = Platform.OS == 'ios' 
        ? `Junte-se a ${guildSelected.guild.name}`
        : widget.instant_invite;

        Share.share({
            message,
            url: widget.instant_invite
        });
    }

    function handleOpenGuild(){
        Linking.openURL(widget.instant_invite);
    }

    useEffect(() => {
        fetchGuildInfo();
    }, []);


    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    widget.instant_invite && (
                        <TouchableOpacity onPress={handleShareInvitation}>
                            <Fontisto name="share" size={24} color={theme.colors.primary} />
                        </TouchableOpacity>
                    )
                }
            />

            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}> 
                        { guildSelected.guild.name }
                    </Text>

                    <Text style={styles.subtitle}>
                        { guildSelected.description }
                    </Text>
                </View>
            </ImageBackground>

            <ListHeader
                title="Partidas agendadas"
                subtitle={`Total ${widget.members ? widget.members.length : '0' }`}
            />

            {
                loading ? <Load /> :
                <>
                    <FlatList
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                        data={widget.members}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={() => <ListDivider isCentered />}
                        renderItem={({item}) => (
                            <Member
                                data={item}
                            />
                        )}
                    />

                    {
                        widget.instant_invite && (
                            <View style={styles.footer}>
                                <ButtonIcon
                                    title="Entrar na partida"
                                    onPress={handleOpenGuild}
                                />
                            </View>
                        )
                    }
                </>
            }

        </Background>
    );
}

export default AppointmentCreate;