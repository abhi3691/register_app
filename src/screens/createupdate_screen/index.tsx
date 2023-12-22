import {Text, SafeAreaView, View} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';
import Input from './orgnization/input';
import Buttons from 'react-native-custom-buttons';

interface props {
  route: any;
}

const CreateUpdateScreen: FC<props> = ({route}) => {
  const data = route?.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.inputText}>{data?.type} Students</Text>
      <View style={styles.inputContaienr}>
        <Input placeholder="Name" />
        <Input placeholder="Age" />
        <Buttons
          type="Text"
          title="Create"
          containerStyles={styles.buttonContainer}
          textStyle={styles.title}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateUpdateScreen;
