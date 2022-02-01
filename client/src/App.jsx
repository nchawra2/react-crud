import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./modules/layout/Navbar";
import GetAllStudent from "./modules/student/GetAllStudent";
import AddStudents from "./modules/student/AddStudents";
import SingleStudent from "./modules/student/SingleStudent";
import UpdateStudent from "./modules/student/UpdateStudent";


function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<GetAllStudent />} />
          <Route path={"/add-students"} element={<AddStudents />} />
          <Route path={"/student/:id"} element={<SingleStudent />} />
          <Route path={"/student/update/:id"} element={<UpdateStudent />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
