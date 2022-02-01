import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as studentAction from "../../redux/student/student.action";
import { useEffect } from "react";
import Spinner from "../layout/Spinner.";

export default function SingleStudent() {
  let { id } = useParams();

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(studentAction.getAStudent(id));
  }, []);

  let studentState = useSelector((state) => {
    return state.students;
  });

  let { selectedStudent , loading} = studentState;

  return (
    <React.Fragment>
      {
        loading ? <Spinner/> : <section className="mt-4">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img src={selectedStudent.image} alt="" className="img-fluid" />
              </div>
              <div className="col-md-4">
                <h2 className="text-success text-uppercase fw-bold">Student Info</h2>
                <ul className="list-group">
                  <li className="list-group-item">
                    Name : {selectedStudent.name}
                  </li>
                  <li className="list-group-item">
                    Gender : {selectedStudent.gender}
                  </li>
                  <li className="list-group-item">
                    Class : {selectedStudent.class}
                  </li>
                  <li className="list-group-item">
                    Roll No : {selectedStudent.roll}
                  </li>
                </ul>
                <NavLink to={'/'} className={'btn btn-dark mt-3'}>
                  GO BACK
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      }
    </React.Fragment>
  );
}
