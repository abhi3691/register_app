import {SafeAreaView} from 'react-native';
import React, {useLayoutEffect} from 'react';
import CreateAndUpdateButtons from './orgninzation/create_and_updateButtons';
import styles from './styles';
import StudentsList from './template/students_list';
import createStudent from './api_hooks/create_student/createStudent';
import updateStudent from './api_hooks/update_student/updateStudent';
import {createDb} from './functions/db_oprations/dbOprations';

const HomeScreen = () => {
  useLayoutEffect(() => {
    createDb();
  }, []);

  const createUser = async () => {
    let data: studentprops = {
      age: 25,
      name: 'ABHINAND',
      gender: 'male',
    };
    let response = await createStudent(data);
    console.log('response', response);
  };

  const updateUser = async () => {
    let data: studentprops = {
      age: 24,
    };
    let response = await updateStudent(2, data);
    console.log('response', response);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* crreate and update students buttons */}
      <CreateAndUpdateButtons
        createrUser={createUser}
        updateUser={updateUser}
      />
      {/* students List */}
      <StudentsList />
    </SafeAreaView>
  );
};

export default HomeScreen;
