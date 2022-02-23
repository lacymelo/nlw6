import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, FlatList } from "react-native";
import styles from './styles';

//componentes
import Background from '../../components/Background';
import Profile from "../../components/Profile";
import ButtonAdd from "../../components/ButtonAdd";
import CategorySelect from "../../components/CategorySelect";
import ListHeader from "../../components/ListHeader";
import Appointments from "../../components/Appointment";
import ListDivider from "../../components/ListDivider";

import { RootStackParamList } from "../../components/RouteParamsList";

type NavigateProp = NativeStackNavigationProp<
  RootStackParamList
>;


const Home = () => {
    const { navigate } = useNavigation<NavigateProp>();
    const [category, setCategory] = useState('');


    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendários',
                icon: 'https://avatars.githubusercontent.com/u/89089202?v=4',
                owner: true
            },

            category: '1',
            date: '22/06 às 20:40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10.'
        },
        {
            id: '2',
            guild: {
                id: '2',
                name: 'Lendários',
                icon: 'https://avatars.githubusercontent.com/u/12619438?v=4',
                owner: false
            },

            category: '1',
            date: '22/06 às 20:40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10.'
        },
        {
            id: '3',
            guild: {
                id: '3',
                name: 'Lendários',
                icon: 'https://avatars.githubusercontent.com/u/89089202?v=4',
                owner: true
            },

            category: '1',
            date: '22/06 às 20:40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10.'
        }
    ];

    function handleAppointmentDetails(appointmentId: number){
        navigate('AppointmentDetails', {
            id: appointmentId
        });
    }

    function handleAppointmentCreate(){
        navigate('AppointmentCreate');
    }

    function handleCategorySelect(categoryId: String) {
        categoryId === category ? setCategory('') : setCategory(String(categoryId));
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />

                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
                hasCheckBox
            />

            <ListHeader
                title="Partidas agendadas"
                subtitle="Total 6"
            />

            <FlatList
                style={styles.matches}
                showsVerticalScrollIndicator={false}
                data={appointments}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <ListDivider />}
                contentContainerStyle={{ paddingBottom: 69 }}
                renderItem={({ item }) => (
                    <Appointments data={item} onPress={() => handleAppointmentDetails(Number(item.id))} />
                )}
            />
        </Background>
    );
}

export default Home;