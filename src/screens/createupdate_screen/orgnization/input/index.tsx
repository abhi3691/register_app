import {View, Text, TextInputProps, TextInput} from 'react-native';
import React, {forwardRef} from 'react';
import styles from './styles';

export interface InputRefProps {
  showError: (value: string) => void;
  hideError: () => void;
}

const Input = forwardRef<InputRefProps, TextInputProps>((props, ref) => {
  return (
    <View style={styles.container}>
      <TextInput {...props} />
    </View>
  );
});

export default Input;
