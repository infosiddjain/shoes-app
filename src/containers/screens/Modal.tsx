import {Layout} from '@/themes/Variables';
import * as React from 'react';
import {Modal, Portal, Text, Button, PaperProvider} from 'react-native-paper';

type modalProps = {
  visible: any;
  setVisible: any;
  showModal: any;
  hideModal: any;
};

const Model = ({visible, hideModal}: modalProps) => {
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <PaperProvider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      {/* <Button style={{marginTop: 30}} onPress={showModal}>
        Show
      </Button> */}
    </PaperProvider>
  );
};

export default Model;
