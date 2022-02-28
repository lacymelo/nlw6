import React, { useCallback, useEffect, useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { View, Text, Image, FlatList } from "react-native";
import styles from './styles';

//componentes
import AsyncStorage from "@react-native-async-storage/async-storage";
import Profile from "../../components/Profile";
import ButtonAdd from "../../components/ButtonAdd";
import CategorySelect from "../../components/CategorySelect";
import ListHeader from "../../components/ListHeader";
import Appointments, { AppointmentsProps } from "../../components/Appointment";
import ListDivider from "../../components/ListDivider";

import { RootStackParamList } from "../../components/RouteParamsList";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import Load from "../../components/Load";
import ModalLogout from "../../components/ModalLogout";

type NavigateProp = NativeStackNavigationProp<
  RootStackParamList
>;


const Home = () => {
    const { navigate } = useNavigation<NavigateProp>();
    const [modalVisible, setModalVisible] = useState(false);
    const [ appointments, setAppointments ] = useState<AppointmentsProps[]>([]);
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);

    useFocusEffect(useCallback(() => {
        loadAppointments();
    }, [category]));

    async function loadAppointments() {
        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

        const storage: AppointmentsProps[] = response ? JSON.parse(response) : [];

        if(category){
            setAppointments(storage.filter(item => item.category === category));
        }else{
            setAppointments(storage);
        }

        setLoading(false);
    };

    function handleAppointmentDetails(guildSelect: AppointmentsProps){
        navigate('AppointmentDetails', {
            guildSelected: guildSelect
        });
    }

    function handleAppointmentCreate(){
        navigate('AppointmentCreate');
    }

    function handleCategorySelect(categoryId: String) {
        categoryId === category ? setCategory('') : setCategory(String(categoryId));
    }

    function handleModal(){
        setModalVisible(!modalVisible);
    }

    return (
        <>
            <View style={styles.header}>
                <Profile handleModalSingOut={handleModal} />

                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>

            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
                hasCheckBox
            />

            {
            loading ? <Load />:
                <>                
                    <ListHeader
                        title="Partidas agendadas"
                        subtitle={`Total ${appointments.length}`}
                    />
        
                    <FlatList
                        style={styles.matches}
                        showsVerticalScrollIndicator={false}
                        data={appointments}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={() => <ListDivider />}
                        contentContainerStyle={{ paddingBottom: 69 }}
                        renderItem={({ item }) => (
                            <Appointments data={item} onPress={() => handleAppointmentDetails(item)} />
                        )}
                    />
                </>
            }

            <ModalLogout closeModal={handleModal} visible={modalVisible}/>
        </>
    );
}

export default Home;