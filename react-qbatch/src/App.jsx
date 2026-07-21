import { useState, useEffect, useMemo, useCallback } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import StudentList from "./components/StudentList";
import Counter from "./components/Counter";

function App() {
  
  // Students State
  const [students, setStudents] = useState([]);

  // Search State
  const [search, setSearch] = useState("");

  // Simulate API call
  useEffect(() => {
    const studentData = [
      {
        id: 1,
        name: "Ali",
        age: 20,
        course: "React",
        active: true,
      },
      {
        id: 2,
        name: "Ahmed",
        age: 22,
        course: "Node.js",
        active: false,
      },
      {
        id: 3,
        name: "Sara",
        age: 21,
        course: "Python",
        active: true,
      },
      {
        id: 4,
        name: "Fatima",
        age: 23,
        course: "Java",
        active: true,
      },
      {
        id: 5,
        name: "Usman",
        age: 24,
        course: "C++",
        active: false,
      },
      {
        id: 6,
        name: "Azfar Nayyan",
        age: 20,
        course: "MERN",
        active: true,
      },
    ];

    setStudents(studentData);
  }, []);

  // useMemo 
  const filteredStudents = useMemo(() => {
    return students.filter((student) =>
      student.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [students, search]);

  // useCallback
  const handleSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  return (
    <div className="container">
      <Header />

      <SearchBar
        search={search}
        setSearch={handleSearch}
      />

      <StudentList students={filteredStudents} />

      <h3
        style={{
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        Showing {filteredStudents.length} student(s)
      </h3>

      <Counter/>
    </div>
  );
}

export default App;