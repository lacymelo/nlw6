import React from "react";
import { View, Text, TouchableOpacity, Alert, ModalProps } from "react-native";
import { useAuth } from "../../hooks/auth";
import Avatar from "../Avatar";
import styles from './styles';

type PropLogout = ModalProps & {
    handleModalSingOut: () => void
}

const Profile: React.FC<PropLogout> = ({ handleModalSingOut }) => {
    const { user, singOut } = useAuth();
    const { firstName, avatar } = user; 

    return(
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.7} onPress={handleModalSingOut}>
                <Avatar urlImage={avatar}/>
            </TouchableOpacity>

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        { firstName }
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>

            </View>
        </View>
    );
}

export default Profile;