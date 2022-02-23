import React, { useState } from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    ScrollView, 
    KeyboardAvoidingView, 
    Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";

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

const AppointmentDetails = () => {
    const [category, setCategory] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

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
                                {
                                    guild.icon ? 
                                        <GuildIcon urlImg={guild.icon}/>
                                    :
                                        <View
                                            style={styles.image}
                                        />
                                }

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
                                    <SmallInput maxLength={2} />

                                    <Text style={styles.divider}>
                                        /
                                    </Text>

                                    <SmallInput maxLength={2} />
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
                                    <SmallInput maxLength={2} />

                                    <Text style={styles.divider}>
                                        :
                                    </Text>

                                    <SmallInput maxLength={2} />
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
                        />

                        <View style={styles.footer}>
                            <Button
                                title="Agendar"
                                activeOpacity={0.8}
                            />
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