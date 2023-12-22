import {Text, View} from 'react-native';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import styles from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import RenderLeftActions from '../renderLeftActions';

interface props {
  item: dataProps;
  index: number;
  deleteStudent: (id: number, index: number) => void;
  updateStudent: (id: number, index: number) => void;
}

export interface SingleStudentRefProps {
  closeSwipable: () => void;
}

const SingleStudent = forwardRef<SingleStudentRefProps, props>(
  ({item, index, deleteStudent, updateStudent}, ref) => {
    const SwipeableRef = useRef<Swipeable>(null);

    const renderRightActionsFUnction = useCallback(() => {
      return (
        <RenderLeftActions
          deleteStudent={() => deleteStudent(item.id, index)}
          updateStudent={() => updateStudent(item.id, index)}
        />
      );
    }, [deleteStudent, item.id, index, updateStudent]);

    useImperativeHandle(ref, () => ({
      closeSwipable() {
        SwipeableRef.current?.close();
      },
    }));
    return (
      <Swipeable
        renderRightActions={renderRightActionsFUnction}
        ref={SwipeableRef}
        overshootFriction={8}>
        <View style={styles.container}>
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
        </View>
      </Swipeable>
    );
  },
);

export default SingleStudent;
