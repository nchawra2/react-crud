import React from "react";
import { useParams, NavLink , useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as studentAction from "../../redux/student/student.action";
import { useEffect } from "react";
import Spinner from "../layout/Spinner.";

export default function UpdateStudent() {
  let { id } = useParams();
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(studentAction.getAStudent(id));
  }, []);

  let studentState = useSelector((state) => {
    return state.students;
  });

  let { selectedStudent , loading} = studentState;

  let updateForm = (e) => {
    dispatch(studentAction.updateStudentForm(e.target.name, e.target.value));
  };

  let updateStudent = (e) => {
    e.preventDefault();
    // dispatch action
    dispatch(studentAction.updateStudent(selectedStudent._id, selectedStudent,navigate));
  };

  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          <div className="col">
            <h2>Update Student</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              expedita dicta, ab, eligendi nemo reprehenderit voluptatum
              dignissimos, voluptas consequatur deleniti impedit in quaerat esse
              harum maxime nihil illo distinctio. Dolorum labore nobis unde
              sapiente veritatis suscipit reprehenderit incidunt eos corrupti.
            </p>
          </div>
        </div>
        {
          loading ? <Spinner/> :         <div className="row mt-3">
            <div className="col-md-4">
              <form onSubmit={updateStudent}>
                <div className="form-group mb-3">
                  <input
                      required
                      name="name"
                      value={selectedStudent.name}
                      onChange={updateForm}
                      type="text"
                      className="form-control"
                      placeholder="Name"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                      required
                      name="class"
                      onChange={updateForm}
                      value={selectedStudent.class}
                      type="number"
                      className="form-control"
                      placeholder="Class"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                      required
                      name="roll"
                      onChange={updateForm}
                      value={selectedStudent.roll}
                      type="number"
                      className="form-control"
                      placeholder="Roll No."
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                      required
                      name="image"
                      onChange={updateForm}
                      value={selectedStudent.image}
                      type="text"
                      className="form-control"
                      placeholder="Image url"
                  />
                </div>
                <div className="form-group mb-3">
                  <select
                      required
                      name="gender"
                      onChange={updateForm}
                      value={selectedStudent.gender}
                      className="form-control"
                  >
                    <option value="">choose a gender</option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                  </select>
                </div>
                <input
                    type="submit"
                    value="UPDATE STUDENT"
                    className="btn btn-success btn-sm"
                />
                <NavLink to={"/"}>
                  <button className="btn btn-dark btn-sm ms-3">GO BACK</button>
                </NavLink>
              </form>
            </div>
            <div className="col-md-4 ms-5">
              <img src={selectedStudent.image} alt="" className="img-fluid" />
            </div>
          </div>
        }
      </div>
    </div>
  );
}
