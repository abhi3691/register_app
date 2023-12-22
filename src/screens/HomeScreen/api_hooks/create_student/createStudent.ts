import axios from 'axios';
import {BaseUrl} from '../../../../../staging';
import {createStudentDB} from '../../functions/db_oprations/dbOprations';

const createStudent = async (data: studentprops) => {
  let response = false;
  try {
    let res = await axios.post(`${BaseUrl}/create`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    response = res?.data;
    let resData: dataProps = res.data.data;
    const callback = (e: dataProps | dataProps[]) => {
      console.log('e', e);
    };
    createStudentDB({
      id: resData.id,
      name: resData.name,
      age: resData.age,
      gender: resData.gender,
      callback,
    });
  } catch (err) {
    console.log('err', err);
    response = false;
  }
  return response;
};

export default createStudent;
