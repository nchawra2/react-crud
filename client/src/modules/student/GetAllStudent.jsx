import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as studentAction from "../../redux/student/student.action";

export default function GetAllStudent() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(studentAction.getAllStudents());
  }, []);

  let studentState = useSelector((state) => {
    return state.students;
  });

  let { students } = studentState;

  let deleteStudent = (id) => {
    dispatch(studentAction.deleteStudent(id));
  };

  return (
    <React.Fragment>
      <div className="container">
        <section className="mt-4">
          <div className="row">
            <div className="col">
              <h2 className="text-dark">
                All Students{" "}
                <NavLink to={"/add-students"} className="btn btn-success">
                  <i className="fa fa-square-plus me-1"></i>New
                </NavLink>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
                blanditiis sint ipsum voluptatum. Quod reiciendis quis itaque
                nobis voluptate, quo ut consequatur dolor sunt tempora vitae
                placeat quia natus. Maxime, libero repellat est quisquam ex enim
                atque deleniti velit illo!
              </p>
            </div>
          </div>
        </section>
        <section className="mt-4">
          <div className="row">
            {students.length > 0 &&
              students.map((student) => {
                return (
                  <div className="col-md-6 mb-3" key={student._id}>
                    <div className="card">
                      <div className="card-body">
                        <div className="row st-content">
                          <div className="col-md-3">
                            <img
                              className="img-fluid st-img"
                              src={student.image}
                              alt=""
                            />
                          </div>
                          <div className="col-md-7">
                            <ul className="list-group mt-2">
                              <li className="list-group-item">
                                Name :-{" "}
                                <span className="fw-bolder">
                                  {student.name}
                                </span>
                              </li>
                              <li className="list-group-item">
                                Gender :-{" "}
                                <span className="fw-bolder">
                                  {student.gender}
                                </span>
                              </li>
                              <li className="list-group-item">
                                Class :-{" "}
                                <span className="fw-bolder">
                                  {student.class}
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-2 activity-btns">
                            <div className="btn btn-warning">
                              <NavLink to={`/student/${student._id}`}>
                                <i class="fas fa-eye text-primary"></i>
                              </NavLink>
                            </div>
                            <div className="btn btn-dark">
                              <NavLink to={`/student/update/${student._id}`}>
                                <i class="far fa-edit text-white"></i>
                              </NavLink>
                            </div>
                            <div
                              className="btn btn-danger"
                              onClick={deleteStudent.bind(this, student._id)}
                            >
                              <i class="fas fa-trash"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
