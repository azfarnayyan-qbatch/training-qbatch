import React from "react";
import dayjs from "dayjs";

import type { Student } from "../types/Student";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../shad-ui/components/ui/card";
import { Badge } from "../../shad-ui/components/ui/badge";

interface StudentCardProps {
  student: Student;
}

function StudentCard({ student }: StudentCardProps) {
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl">{student.name}</CardTitle>

            <p className="mt-2 text-sm text-muted-foreground">
              Joined {dayjs(student.joinedAt).format("DD MMM YYYY")}
            </p>
          </div>

          <Badge variant={student.active ? "default" : "secondary"}>
            {student.active ? "Active" : "Inactive"}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="text-muted-foreground">Age</span>

            <span className="font-semibold">{student.age}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">Course</span>

            <span className="font-semibold text-primary">{student.course}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default React.memo(StudentCard);
