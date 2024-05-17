import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h1>Ooohoooo!!!!!!! 404 error occured the page is not found!</h1>
        </div>
        <button
          style={{ color: "red" }}
          type="button"
          className="btn btn-primary"
        >
          <Link to="/">Add more Students</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
