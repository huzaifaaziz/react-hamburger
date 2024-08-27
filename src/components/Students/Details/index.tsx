import {StudentType, AddressType} from '../../../types/student';
import {FIELD_CONFIG, isStudentType} from '../../../utils/student';

interface StudentDetailsProps {
  student: StudentType | {};
}

const StudentDetails = ({student}: StudentDetailsProps) => {
  if (!isStudentType(student)) {
    return <p>No student data available</p>;
  }

  return (
    <div className="px-4 pb-5">
      {Object.keys(FIELD_CONFIG).map((key) => {
        const fieldConfig = FIELD_CONFIG[key];
        if (typeof fieldConfig === 'object' && 'fields' in fieldConfig) {
          return (
            <div key={key} className="flex flex-col gap-1">
              <p className="text-sm font-medium">{fieldConfig.label}</p>
              <div className="flex flex-col gap-2">
                {Object.keys(fieldConfig.fields).map((nestedKey) => (
                  <div key={nestedKey} className="flex items-center gap-2">
                    <p className="text-sm font-medium">
                      {fieldConfig.fields[nestedKey as keyof AddressType]}:
                    </p>
                    <p className="text-sm font-normal">
                      {student.address[nestedKey as keyof AddressType]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        return (
          <div key={key} className="flex items-center gap-2">
            <p className="text-sm font-medium">{fieldConfig}</p>
            <p className="text-sm font-normal">{(student as any)[key]}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StudentDetails;
