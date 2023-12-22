import {Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import styles from './styles';

interface props {
  item: dataProps;
  index: number;
  deleteUser: (id: number) => void;
}

const SingleStudent: FC<props> = ({item, index, deleteUser}) => {
  return (
    <Pressable style={styles.container} onPress={() => deleteUser(1)}>
      <Text>{index + 1}</Text>
      <Text>{item.name}</Text>
      <Text>{item.age}</Text>
      <Text>{item.gender}</Text>
    </Pressable>
  );
};

export default SingleStudent;
