import {View} from 'react-native';
import React from 'react';
import Buttons from 'react-native-custom-buttons';
import colors from '../../../../components/constants/colors';
import styles from './styles';
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';

const CreateButton = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const createUser = async () => {
    navigation.navigate('CreateUpdateScreen', {type: 'Create'});
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Buttons
          type="vector Icon"
          fontFamily="FontAwesome5"
          iconName="user-plus"
          iconcolor={colors.white}
          containerStyles={styles.buttonContainer}
          onPress={() => createUser()}
        />
      </View>
    </View>
  );
};

export default CreateButton;
