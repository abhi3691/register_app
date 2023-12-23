import {View, TextInputProps, TextInput} from 'react-native';
import React, {
  Fragment,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import styles from './styles';
import Animated, {FadeInLeft, FadeOutLeft} from 'react-native-reanimated';

export interface InputRefProps {
  showError: (value: string) => void;
  hideError: () => void;
  setValue: (value: string) => void;
}

const Input = forwardRef<InputRefProps, TextInputProps>((props, ref) => {
  const [error, setError] = useState<string | boolean>(false);
  const textRef = useRef<TextInput>(null);

  useImperativeHandle(ref, () => ({
    showError(value) {
      setError(value);
      console.log('error', value);
    },
    hideError() {
      setError(false);
    },
    setValue(value) {
      textRef.current?.setNativeProps({text: value});
    },
  }));

  return (
    <Fragment>
      <View style={styles.container}>
        <TextInput {...props} ref={textRef} />
      </View>
      {error && (
        <Animated.Text
          style={styles.errorText}
          entering={FadeInLeft.duration(500)}
          exiting={FadeOutLeft.duration(500)}>
          {error}
        </Animated.Text>
      )}
    </Fragment>
  );
});

export default Input;
