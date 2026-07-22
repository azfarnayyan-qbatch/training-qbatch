import StudentCard from "./StudentCard";
import type { Student } from "../types/Student";

interface StudentListProps {
  students: Student[];
}

function StudentList({ students }: StudentListProps) {
  if (students.length === 0) {
    return <h2>No students found.</h2>;
  }

  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
        />
      ))}
    </div>
  );
}

export default StudentList;
