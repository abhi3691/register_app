import {SafeAreaView} from 'react-native';
import React, {useLayoutEffect} from 'react';
import styles from './styles';
import StudentsList from './template/students_list';
import {createDb} from './functions/db_oprations/dbOprations';
import {useIsFocused} from '@react-navigation/native';
import CreateButton from './orgninzation/CreateButton';

const HomeScreen = () => {
  const isFocused = useIsFocused();
  useLayoutEffect(() => {
    createDb();
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      {/* crreate and update students buttons */}
      <CreateButton />
      {/* students List */}
      <StudentsList />
    </SafeAreaView>
  );
};

export default HomeScreen;
