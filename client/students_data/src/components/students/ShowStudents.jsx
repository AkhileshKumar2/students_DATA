import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Students.css";
import { Link } from "react-router-dom";

export const ShowStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/students");
      setStudents(response.data.students);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className=" card container justify-content-center">
      <h3>List of all the students</h3>
      <div className="ADDelement ">
        <button type="button" className="btn btn-primary">
          <Link to="/student-add">Add more Students</Link>
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First name </th>
            <th scope="col">Last name</th>
            <th scope="col">Email ID</th>
            <th scope="col">Phone number</th>
            <th scope="col">Your password</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student._id}>
              <th scope="row">{index + 1}</th>
              <td>{student.f_name}</td>
              <td>{student.l_name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.password}</td>
              <button type="button" className="btn btn-primary">
                <Link to={`/student-update/${student._id}`}>Edit</Link>
              </button>
              <button type="button" className="btn btn-danger">
                <Link to={`/student-delete/${student._id}`}>Delete</Link>
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
