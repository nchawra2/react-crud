import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as studentAction from "../../redux/student/student.action";

export default function AddStudents() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let [student, setStudent] = useState({
    name: "",
    class: "",
    roll: "",
    image: "",
    gender: "",
  });

  let updateForm = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  let addStudent = (e) => {
    e.preventDefault();
    dispatch(studentAction.addStudents(student,navigate));
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <h2>Add Students</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              repellendus possimus ab veritatis dolore nulla hic fugit. Nihil
              tempora, consequatur velit esse fuga praesentium at eveniet cumque
              animi temporibus facilis doloremque adipisci voluptates! Numquam,
              facere.
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <form onSubmit={addStudent}>
                  <div className="form-group mb-3">
                    <input
                      required
                      name="name"
                      value={student.name}
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
                      value={student.class}
                      onChange={updateForm}
                      type="number"
                      className="form-control"
                      placeholder="Class"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      required
                      name="roll"
                      value={student.roll}
                      onChange={updateForm}
                      type="number"
                      className="form-control"
                      placeholder="Roll No."
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      required
                      name="image"
                      value={student.image}
                      onChange={updateForm}
                      type="text"
                      className="form-control"
                      placeholder="Image url"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <select
                      required
                      name="gender"
                      value={student.gender}
                      onChange={updateForm}
                      className="form-control"
                    >
                      <option value="">choose a gender</option>
                      <option value="MALE">MALE</option>
                      <option value="FEMALE">FEMALE</option>
                    </select>
                  </div>
                  <input
                    type="submit"
                    value="ADD STUDENT"
                    className="btn btn-success btn-sm"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
