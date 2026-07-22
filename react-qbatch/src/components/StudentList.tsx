import StudentCard from "./StudentCard";
import type { Student } from "../types/Student";

import { 
  Card, 
  CardContent } from "../../shad-ui/components/ui/card";

interface StudentListProps {
  students: Student[];
}

function StudentList({ students }: StudentListProps) {
  if (students.length === 0) {
    return (
      <Card className="border-dashed">
        <CardContent className="flex flex-col items-center justify-center py-16">
          <h2 className="text-2xl font-semibold">No students found 😕</h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Try searching with a different name.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}

export default StudentList;
