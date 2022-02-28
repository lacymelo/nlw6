import React, { ReactNode } from "react";
import { View, Modal, Text, ModalProps, TouchableWithoutFeedback } from "react-native";
import Background from "../Background";

import styles from './styles';
import ButtonModal from "../ButtonModal";
import { useAuth } from "../../hooks/auth";

type Props = ModalProps & {
    visible: boolean;
    closeModal: () => void;
}

const ModalLogout: React.FC<Props> = ({ closeModal, visible, ...rest }) => {
    const { singOut } = useAuth();

    return(
        <Modal
            transparent
            animationType="slide"
            visible={visible}
            {...rest}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overlay}>
                    <View style={styles.container}>
                        <Background>
                            <View style={styles.modalContent}>
                                <View style={styles.contentTitle}>
                                    <Text style={styles.title}> 
                                        Deseja sair do Game
                                    </Text>

                                    <Text style={styles.subtitle}>
                                        Play?
                                    </Text>
                                </View>

                                <View style={styles.buttonContainer}>
                                    <ButtonModal
                                        toChange={true}
                                        onPress={closeModal}
                                        title="Não"
                                    />

                                    <ButtonModal
                                        onPress={singOut}
                                        title="Sim"
                                    />
                                </View>
                            </View>
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

export default ModalLogout;