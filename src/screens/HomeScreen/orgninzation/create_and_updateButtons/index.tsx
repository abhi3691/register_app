import {View} from 'react-native';
import React, {FC} from 'react';
import Buttons from 'react-native-custom-buttons';
import colors from '../../../../components/constants/colors';
import styles from './styles';

interface props {
  createrUser: () => void;
  updateUser: () => void;
}

const CreateAndUpdateButtons: FC<props> = ({createrUser, updateUser}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Buttons
          type="vector Icon"
          fontFamily="FontAwesome5"
          iconName="user-plus"
          iconcolor={colors.white}
          containerStyles={styles.buttonContainer}
          onPress={createrUser}
        />
        <Buttons
          type="vector Icon"
          fontFamily="FontAwesome5"
          iconName="user-edit"
          iconcolor={colors.white}
          containerStyles={styles.buttonContainer}
          onPress={updateUser}
        />
      </View>
    </View>
  );
};

export default CreateAndUpdateButtons;
