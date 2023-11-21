import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const ModalComponent = ({ modalVisible, closeModal, modalContent }) => {
  const handleButtonPress = () => {
    closeModal();
  };

  return (
    <Modal
      isVisible={modalVisible}
      style={styles.modal}
      animationIn="slideInDown"
      animationOut="slideOutUp"
      backdropOpacity={0.5}
    >
      <View style={styles.modalContent}>
        <TouchableOpacity onPress={handleButtonPress} style={styles.closeButton}>
          <Text>X</Text>
        </TouchableOpacity>
        {modalContent}
        <TouchableOpacity onPress={handleButtonPress} style={styles.modalButton}>
          <Text>Aplicar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    width: '90%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 4,
  },
});

export default ModalComponent;
