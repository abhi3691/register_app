import axios from 'axios';
import {BaseUrl} from '../../../../../staging';
import {deleteStudentDB} from '../../functions/db_oprations/dbOprations';

const deleteStudent = async (id: number) => {
  let response = false;
  try {
    let res = await axios.delete(`${BaseUrl}/delete/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    response = res?.data;
    let resData: dataProps = res.data.data;
    const callback = (e: dataProps) => {
      console.log('e', e);
    };
    deleteStudentDB(resData.id, callback);
  } catch (err) {
    console.log('err', err);
    response = false;
  }
  return response;
};

export default deleteStudent;
