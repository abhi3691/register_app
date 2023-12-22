import axios from 'axios';
import {BaseUrl} from '../../../../../staging';
import {updateStudentDB} from '../../functions/db_oprations/dbOprations';

const updateStudent = async (id: number, data: studentprops) => {
  let response = false;
  try {
    let res = await axios.put(`${BaseUrl}/update/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    response = res?.data;
    let resData: studentprops = res.data.data;
    const callback = (e: studentprops | studentprops[]) => {
      console.log('e', e);
    };
    updateStudentDB({
      id: id,
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

export default updateStudent;
