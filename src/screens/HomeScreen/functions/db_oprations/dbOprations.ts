import SQLite from 'react-native-sqlite-storage';

const DB_NAME = 'register.db';

type callBackType = (value: dataProps) => void;
type allCallBackType = (e: dataProps[]) => void;
interface props extends dataProps {
  callback: callBackType;
}

const createDb = () => {
  const db = SQLite.openDatabase(
    {name: DB_NAME, location: 'default'},
    () => console.log('Database opened successfully'),
    (error: any) => console.error('Error opening database', error),
  );

  // Create a table example
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY , name TEXT, age INTEGER, gender TEXT)',
      [],
      () => console.log('Table created successfully'),
      (_, error) => console.error('Error creating table', error),
    );
  });
};

const createStudentDB = ({name, age, gender, callback}: props) => {
  SQLite.openDatabase(
    {name: DB_NAME, location: 'default'},
    db => {
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO students (id,name, age, gender) VALUES (?,?, ?, ?)',
          [name, age, gender],
          (_, result) => {
            const lastInsertRowId = result.insertId;
            tx.executeSql(
              'SELECT * FROM students WHERE id = ?',
              [lastInsertRowId],
              (_, queryResult) => {
                const createdStudent = queryResult.rows.raw()[0];
                callback(createdStudent);
              },
              (_, error) =>
                console.error('Error fetching created student', error),
            );
          },
          (_, error) => console.error('Error creating student', error),
        );
      });
    },
    error => console.error('Error opening database', error),
  );
};

const updateStudentDB = ({id, name, age, gender, callback}: props) => {
  SQLite.openDatabase(
    {name: DB_NAME, location: 'default'},
    db => {
      db.transaction(tx => {
        tx.executeSql(
          'UPDATE students SET name = ?, age = ?, gender = ? WHERE id = ?',
          [name, age, gender, id],
          _ => {
            tx.executeSql(
              'SELECT * FROM students WHERE id = ?',
              [id],
              (_, queryResult) => {
                const updatedStudent = queryResult.rows.raw()[0];
                callback(updatedStudent);
              },
              (_, error) =>
                console.error('Error fetching updated student', error),
            );
          },
          (_, error) => console.error('Error updating student', error),
        );
      });
    },
    error => console.error('Error opening database', error),
  );
};

const deleteStudentDB = (id: number, callback: callBackType) => {
  SQLite.openDatabase(
    {name: DB_NAME, location: 'default'},
    db => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM students WHERE id = ?',
          [id],
          (_, queryResult) => {
            const deletedStudent = queryResult.rows.raw()[0];
            tx.executeSql(
              'DELETE FROM students WHERE id = ?',
              [id],
              _ => {
                callback(deletedStudent);
              },
              (_, error) => console.error('Error deleting student', error),
            );
          },
          (_, error) => console.error('Error fetching deleted student', error),
        );
      });
    },
    error => console.error('Error opening database', error),
  );
};

const getAllStudentsDB = (callback: allCallBackType) => {
  SQLite.openDatabase(
    {name: DB_NAME, location: 'default'},
    db => {
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM students',
          [],
          (_, result) => {
            const rows = result.rows.raw();
            callback(rows);
          },
          (_, error) => console.error('Error fetching students', error),
        );
      });
    },
    error => console.error('Error opening database', error),
  );
};

export {
  createDb,
  createStudentDB,
  updateStudentDB,
  deleteStudentDB,
  getAllStudentsDB,
};
