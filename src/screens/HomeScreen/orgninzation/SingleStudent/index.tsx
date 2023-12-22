import {Text, Pressable, View} from 'react-native';
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
      <View style={[styles.sl, styles.rightLineBox]}>
        <Text style={styles.title}>{index + 1}</Text>
      </View>
      <View style={[styles.name, styles.rightLineBox]}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
      <View style={[[styles.age, styles.rightLineBox]]}>
        <Text style={styles.title}>{item.age}</Text>
      </View>
      <View style={[styles.flex]}>
        <Text style={styles.title}>{item.gender}</Text>
      </View>
    </Pressable>
  );
};

export default SingleStudent;
