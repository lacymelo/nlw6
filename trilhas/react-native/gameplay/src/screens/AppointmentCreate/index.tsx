import React, { useState } from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    ScrollView, 
    KeyboardAvoidingView, 
    Platform,
    ActivityIndicator,
} from "react-native";
import { COLLECTION_APPOINTMENTS } from "../../configs/database";
import { Feather } from "@expo/vector-icons";
import uuid from 'react-native-uuid';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

//componentes
import styles from './styles';
import CategorySelect from "../../components/CategorySelect";
import { theme } from "../../global/styles/theme";
import SmallInput from "../../components/SmallInput";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import ModalView from "../../components/ModalView";
import Guilds from "../Guilds";
import { GuildProps } from "../../components/Guild";
import GuildIcon from "../../components/GuildIcon";
import { RootStackParamList } from "../../components/RouteParamsList";
import { useNavigation } from "@react-navigation/native";
import Load from "../../components/Load";

type NavigateProp = NativeStackNavigationProp<
    RootStackParamList
>;

const AppointmentDetails = () => {
    const { navigate } = useNavigation<NavigateProp>();
    const [category, setCategory] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);
    const [loading, setLoading] = useState(false);
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [description, setDescription] = useState('');

    function handleGuilds(){
        setModalVisible(!modalVisible);
    }

    function handleCategorySelect(categoryId: String) {
        setCategory(String(categoryId));
    }

    function handleGuildSelect(guildSelect: GuildProps){
        setModalVisible(!modalVisible);
        setGuild(guildSelect);
    }

    async function handleNavigateToHome(){
        navigate('Home');
    }

    async function handleSave() {
        const newAppointment = {
            id: uuid.v4(),
            guild,
            category,
            date: `${day}/${month} às ${hour}:${minute}h`,
            description,
        };

        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

        const appointments = storage ? JSON.parse(storage) : [];

        await AsyncStorage.setItem(
            COLLECTION_APPOINTMENTS,
            JSON.stringify([...appointments, newAppointment])
        ).then(() => {
            setLoading(!loading);
            handleNavigateToHome();
        }).catch((err) => {
            setLoading(!loading);
            alert(err.data);
        });
    }

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <>
                <ScrollView>
                    <Text style={[
                        styles.label,
                        styles.labelContent
                    ]}>
                        Categoria
                    </Text>

                    <CategorySelect
                        hasCheckBox
                        setCategory={handleCategorySelect}
                        categorySelected={category}
                    />

                    <View style={styles.form}>
                        <TouchableOpacity onPress={handleGuilds}>
                            <View style={styles.select}>
                                {<GuildIcon guildId={guild.id} iconId={guild.icon}/>}

                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        { guild.name ? guild.name : 'Selecione um servidor' }
                                    </Text>
                                </View>

                                <Feather
                                    name="chevron-right"
                                    color={theme.colors.heading}
                                    size={18}
                                />
                            </View>
                        </TouchableOpacity>

                        <View style={styles.field}>
                            <View>
                                <Text style={[
                                    styles.label,
                                    {marginBottom: 12}
                                    ]}>
                                    Dia e mês
                                </Text>


                                <View style={styles.column}>
                                    <SmallInput 
                                        maxLength={2}
                                        value={day}
                                        onChangeText={setDay}
                                        />

                                    <Text style={styles.divider}>
                                        /
                                    </Text>

                                    <SmallInput
                                        maxLength={2}
                                        value={month}
                                        onChangeText={setMonth}
                                        />
                                </View>
                            </View>

                            <View>
                                <Text style={[
                                    styles.label,
                                    {marginBottom: 12}
                                    ]}>
                                    Hora e minuto
                                </Text>


                                <View style={styles.column}>
                                    <SmallInput
                                        maxLength={2}
                                        value={hour}
                                        onChangeText={setHour}
                                        />

                                    <Text style={styles.divider}>
                                        :
                                    </Text>

                                    <SmallInput
                                    maxLength={2}
                                    value={minute}
                                    onChangeText={setMinute}
                                    />
                                </View>
                            </View>

                        </View>

                        <View
                            style={[styles.field, { marginBottom: 12 }]}>
                            <Text style={styles.label}>
                                Descrição
                            </Text>

                            <Text style={styles.caracteresLimit}>
                                Max 100 caracteres
                            </Text>
                        </View>

                        <TextArea
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                            value={description}
                            onChangeText={setDescription}
                        />

                        <View style={styles.footer}>
                            {
                                loading ? <Load />:
                                <Button
                                    title="Agendar"
                                    activeOpacity={0.8}
                                    onPress={handleSave}
                                />
                            }
                        </View>
                    </View>
                </ScrollView>
            </>


            <ModalView closeModal={handleGuilds} visible={modalVisible}>
                <Guilds handleGuildSelect={handleGuildSelect}/>
            </ModalView>
        </KeyboardAvoidingView>
    );
}

export default AppointmentDetails;