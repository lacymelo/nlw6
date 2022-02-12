import React from "react";
import { View, Text, Image } from "react-native";
import styles from './styles';

import Illustration from '../../assets/illustration.png';
import ButtonIcon from "../../components/ButtonIcon";

const SignIn = () => {
    return(
        <View style={styles.container}>
            <Image
                source={Illustration}
                style={styles.image}
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize {`\n`}
                    suas jogatinas {`\n`}
                    facilmente
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon title="Entrar com Discord" activeOpacity={0.8}/>
            </View>
        </View>
    );
}

export default SignIn;