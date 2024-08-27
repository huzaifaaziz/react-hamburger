import {StudentType} from '../../../types/student';

interface StudentTileProps {
  student: StudentType;
  onClick: () => void;
}

const StudentTile = ({student, onClick}: StudentTileProps) => {
  return (
    <div
      className="flex items-center gap-2 p-4 border rounded-lg shadow-md cursor-pointer"
      onClick={onClick}
    >
      <div className="w-16 h-16">
        <img
          src={student.image}
          alt={student.name}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <p className="text-sm font-normal">{student.name}</p>
    </div>
  );
};

export default StudentTile;
