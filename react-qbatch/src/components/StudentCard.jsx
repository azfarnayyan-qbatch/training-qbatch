import React from "react";

function StudentCard({ student }) {
  return (
    <div className="card">
      <h2>{student.name}</h2>

      <p>
        <strong>Age:</strong> {student.age}
      </p>

      <p>
        <strong>Course:</strong> {student.course}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {student.active ? "Active" : " Inactive"}
      </p>
    </div>
  );
}

export default React.memo(StudentCard);