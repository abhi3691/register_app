import {View} from 'react-native';
import React, {useLayoutEffect, useRef} from 'react';
import {SimpleRecycler} from 'react-native-simple-recyclerlistview';
import ScreenRatio from '../../../../components/constants/ScreenRatio';
import colors from '../../../../components/constants/colors';
import SingleStudent from '../../orgninzation/SingleStudent';
import styles from './styles';
import StudentsListHeader from '../../molecules/students_list_titile';
import deleteStudent from '../../api_hooks/delete_student /deleteStudent';

const StudentsList = () => {
  const recyclerRef = useRef<SimpleRecycler>(null);

  useLayoutEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    recyclerRef.current?.loadDataFromApi([]);
  };

  const deleteUser = async () => {
    let response = await deleteStudent(2);
    console.log('response', response);
  };

  // render item
  const rowRenderer = (
    _type: string | number,
    data: any,
    index: number,
    _extendedState?: object | undefined,
  ) => (
    <SingleStudent index={index} item={data?.item} deleteUser={deleteUser} />
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
