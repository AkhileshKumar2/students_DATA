import { useState } from "react";
import axios from "axios";
import "./Students.css";
import { useNavigate } from "react-router-dom";
const CreateStudent = () => {
  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/students",
        formData
      );
      console.log("Student added successfully:", response.data);
      // Optionally, you can redirect or perform any other action after successful addition
      navigate(`/`);
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };
  // Function to check if all required fields are filled
  const allFieldsFilled = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  return (
    <div>
      <div className=" createUser container card">
        <h3>Please Fill your details here </h3>
        <form onSubmit={handleSubmit} className="  row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              First name
            </label>
            <input
              className="form-control"
              type="text"
              name="f_name"
              placeholder="First Name"
              value={formData.f_name}
              onChange={handleChange}
              required
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
              value={formData.l_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email ID
            </label>
            <input
              className="form-control"
              type="text"
              name="email"
              placeholder="First Name"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Mobile number
            </label>
            <input
              className="form-control"
              type="text"
              name="phone"
              placeholder="Mobile number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            disabled={!allFieldsFilled()}
            type="submit"
            className="btn btn-success"
          >
            Add Students
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateStudent;
