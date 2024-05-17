import { Route, Routes } from "react-router-dom";
import CreateStudent from "./CreateStudent";
import UpdateStudents from "./UpdateStudents";
import DeleteStudent from "./DeleteStudent";

import { ShowStudents } from "./ShowStudents";
import NotFound from "./NotFound";

const AppRouting = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShowStudents />} />
        <Route path="/student-add" element={<CreateStudent />} />
        <Route path="/student-update/:id" element={<UpdateStudents />} />
        <Route path="/student-delete/:id" element={<DeleteStudent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppRouting;
