import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const DeleteStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  //const navigate = useNavigate();
  const [student, setStudent] = useState({
    f_name: "",
    l_name: "",
    email: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    // Fetch the student data from the API using the provided id
    axios
      .get(`http://localhost:3000/api/v1/students/${id}`)
      .then((response) => {
        //this below line of code needs to be noted:-
        /* in the blow line of code response.data.student:-
        response-> represents the response received from the API call.
        response.data-> accesses the data contained within the response object.
        response.data.student-> accesses a specific property named student within the data object. */
        setStudent(response.data.student);
        // console.log(response.data.student);
        // console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a PUT request to update the student data
    axios
      .delete(`http://localhost:3000/api/v1/students/${id}`)
      .then((response) => {
        console.log("Student data deleted successfully:", response.data);
        // You can redirect or perform any other action after successful update
        navigate(`/`);
      })
      .catch((error) => {
        console.error("Error updating student data:", error);
      });
  };

  // Function to check if all required fields are filled
  // const allFieldsFilled = () => {
  //   return Object.values(student).every((value) => value.trim() !== "");
  // };
  return (
    <div className="container card">
      <h2> Delete Student</h2>
      <form className="  row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            First name
          </label>
          <input
            className="form-control"
            type="text"
            name="f_name"
            placeholder="First Name"
            required
            value={student.f_name}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Last name
          </label>
          <input
            className="form-control"
            type="text"
            name="l_name"
            placeholder="Last Name"
            required
            value={student.l_name}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="First Name"
            required
            value={student.email}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Phone number
          </label>
          <input
            className="form-control"
            type="text"
            name="phone"
            placeholder="First Name"
            required
            value={student.phone}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Password
          </label>
          <input
            className="form-control"
            type="text"
            name="password"
            placeholder="Password"
            value={student.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Delete Studets
        </button>
      </form>
    </div>
  );
};

export default DeleteStudent;
