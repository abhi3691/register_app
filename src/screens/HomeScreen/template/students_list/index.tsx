import {View} from 'react-native';
import React, {useCallback, useLayoutEffect, useRef} from 'react';
import {SimpleRecycler} from 'react-native-simple-recyclerlistview';
import ScreenRatio from '../../../../components/constants/ScreenRatio';
import colors from '../../../../components/constants/colors';
import SingleStudent, {
  SingleStudentRefProps,
} from '../../orgninzation/SingleStudent';
import styles from './styles';
import StudentsListHeader from '../../molecules/students_list_titile';
import deleteStudent from '../../api_hooks/delete_student /deleteStudent';
import {getAllStudentsDB} from '../../functions/db_oprations/dbOprations';
import {useIsFocused} from '@react-navigation/native';

const StudentsList = () => {
  const recyclerRef = useRef<SimpleRecycler>(null);
  const SingleStudentRef = useRef<SingleStudentRefProps>(null);
  const isFocused = useIsFocused();
  useLayoutEffect(() => {
    if (isFocused) {
      loadData();
    }
  }, [isFocused]);

  const loadData = () => {
    getAllStudentsDB(e => {
      if (e.length) {
        recyclerRef.current?.loadDataFromApi(e);
      } else {
        recyclerRef.current?.loadDataFromApi([]);
      }
    });
  };

  const deleteStudentFn = useCallback(async (id: number, index: number) => {
    let response = await deleteStudent(id);
    if (response) {
      recyclerRef.current?.SpliceData(index);
      setTimeout(() => {
        SingleStudentRef.current?.closeSwipable();
      }, 100);
    }
  }, []);

  const updateStudent = async () => {};
  // render item
  const rowRenderer = (
    _type: string | number,
    data: any,
    index: number,
    _extendedState?: object | undefined,
  ) => (
    <SingleStudent
      index={index}
      item={data?.item}
      deleteStudent={deleteStudentFn}
      updateStudent={updateStudent}
      ref={SingleStudentRef}
    />
  );

  return (
    <View style={styles.container}>
      {/* students list titles name,age,grade */}
      <StudentsListHeader />
      <SimpleRecycler
        emptyText="No Students Found Add One "
        height={ScreenRatio.height / 10}
        width={ScreenRatio.width}
        activityColor={colors.black}
        activitySize={'large'}
        rowRenderer={rowRenderer}
        emptyTextStyle={styles.emptyText}
        ref={recyclerRef}
      />
    </View>
  );
};

export default StudentsList;
