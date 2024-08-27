import {useEffect, useState} from 'react';
import {getRequest} from '../../api';
import {StudentType} from '../../types/student';
import CustomModal from '../CustomModal';
import StudentTile from './Tile';
import {isStudentType} from '../../utils/student';
import StudentDetails from './Details';

const Students = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [studentsList, setStudentsList] = useState<StudentType[] | []>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedStudent, setSelectedStudent] = useState<StudentType | {}>({});
  const toggleLoading = () => setLoading((prev) => !prev);
  const toggleModal = () => setIsModalOpen((prev) => !prev);
  const tileClick = (student: StudentType) => {
    toggleModal();
    setSelectedStudent(student);
  };
  const fetchStudents = async () => {
    toggleLoading();
    try {
      const response = await getRequest('students');
      setStudentsList(response);
      toggleLoading();
    } catch (err) {
      toggleLoading();
      setHasError(true);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <CustomModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        title={
          isStudentType(selectedStudent)
            ? selectedStudent.name
            : 'Student Details'
        }
        image={isStudentType(selectedStudent) ? selectedStudent.image : ''}
      >
        <StudentDetails student={selectedStudent} />
      </CustomModal>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : hasError ? (
        <p className="text-center">Failed to fetch students</p>
      ) : studentsList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {studentsList.map((student: StudentType) => (
            <StudentTile
              student={student}
              key={student.id}
              onClick={() => tileClick(student)}
            />
          ))}
        </div>
      ) : (
        <p className="text-center">No students to show</p>
      )}
    </>
  );
};

export default Students;
