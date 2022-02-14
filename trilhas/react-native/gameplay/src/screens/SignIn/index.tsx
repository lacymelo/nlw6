import React from "react";
import { View, Text, Image } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import styles from './styles';

import Illustration from '../../assets/illustration.png';
import Background from '../../components/Background';
//componentes
import ButtonIcon from "../../components/ButtonIcon";
import { RootStackParamList } from "../../components/RouteParamsList";

type NavigateProp = NativeStackNavigationProp<
  RootStackParamList
>;

const SignIn = () => {
    const { navigate } = useNavigation<NavigateProp>();

    function handleNavigateToHome(){
        navigate('Home');
    }

    return(
        <Background>
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

                    <ButtonIcon title="Entrar com Discord" activeOpacity={0.8} onPress={handleNavigateToHome}/>
                </View>
            </View>
        </Background>
    );
}

export default SignIn;