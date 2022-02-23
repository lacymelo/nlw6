import React, { ReactNode } from "react";
import { View, Modal, ModalProps, TouchableWithoutFeedback } from "react-native";
import Background from "../Background";

import styles from './styles';

type Props = ModalProps & {
    children: ReactNode;
    visible: boolean;
    closeModal: () => void;
}

const ModalView: React.FC<Props> = ({ children, visible, closeModal, ...rest }) => {

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
                            <View style={styles.bar}/>
                            { children }
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

export default ModalView;