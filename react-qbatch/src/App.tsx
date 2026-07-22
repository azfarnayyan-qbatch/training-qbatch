import { 
  useState, 
  useEffect, 
  useMemo } from "react";

import orderBy from "lodash/orderBy";

import type { Student } from "./types/Student";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import StudentList from "./components/StudentList";
import Counter from "./components/Counter";

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const studentData: Student[] = [
      {
        id: 1,
        name: "Ali",
        age: 20,
        course: "React",
        active: true,
        joinedAt: "2025-10-12",
      },
      {
        id: 2,
        name: "Ahmed",
        age: 22,
        course: "Node.js",
        active: false,
        joinedAt: "2025-11-08",
      },
      {
        id: 3,
        name: "Sara",
        age: 21,
        course: "Python",
        active: true,
        joinedAt: "2025-12-18",
      },
      {
        id: 4,
        name: "Fatima",
        age: 23,
        course: "Java",
        active: true,
        joinedAt: "2026-01-20",
      },
      {
        id: 5,
        name: "Usman",
        age: 24,
        course: "C++",
        active: false,
        joinedAt: "2026-02-10",
      },
      {
        id: 6,
        name: "Azfar Nayyan",
        age: 20,
        course: "MERN",
        active: true,
        joinedAt: "2026-03-15",
      },
    ];

    setStudents(studentData);
  }, []);

  const filteredStudents = useMemo(() => {
    const filtered = students.filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase()),
    );

    return orderBy(filtered, ["name"], ["asc"]);
  }, [students, search]);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto max-w-6xl p-8">
        <Header />

        <SearchBar search={search} setSearch={setSearch} />

        <StudentList students={filteredStudents} />

        <div className="mt-8 text-center text-lg font-semibold">
          Showing {filteredStudents.length} student(s)
        </div>

        <div className="mt-8">
          <Counter />
        </div>
      </div>
    </div>
  );
}

export default App;
