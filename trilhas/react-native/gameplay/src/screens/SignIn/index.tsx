import React from "react";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import styles from './styles';

import Illustration from '../../assets/illustration.png';
//componentes
import ButtonIcon from "../../components/ButtonIcon";
import { RootStackParamList } from "../../components/RouteParamsList";
import { useAuth } from "../../hooks/auth";
import { theme } from "../../global/styles/theme";

type NavigateProp = NativeStackNavigationProp<
  RootStackParamList
>;

const SignIn = () => {
    const { navigate } = useNavigation<NavigateProp>();

    const { loading, signIn } = useAuth();

    async function handleNavigateToHome(){
        try {
            await signIn()
        } catch (error) {
            Alert.alert(String(error));
        }

        // navigate('Home');
    }

    return(
        <>
            <View style={styles.container}>
                <Image
                    source={Illustration}
                    style={styles.image}
                />

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {`\n`}
                        e organize suas {`\n`}
                        jogatinas
                    </Text>

                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games {`\n`}
                        favoritos com seus amigos
                    </Text>

                    {
                        loading ? <ActivityIndicator color={theme.colors.primary}/> :
                        <ButtonIcon
                            title="Entrar com Discord"
                            activeOpacity={0.8}
                            onPress={handleNavigateToHome}
                        />
                    }
                </View>
            </View>
        </>
    );
}

export default SignIn;