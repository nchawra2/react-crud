import axios from "axios";

export const GET_STUDENTS_REQUEST = "GET_STUDENTS_REQUEST";
export const GET_STUDENTS_SUCCESS = "GET_STUDENTS_SUCCESS";
export const GET_STUDENTS_FAILURE = "GET_STUDENTS_FAILURE";

export const ADD_STUDENTS_REQUEST = "ADD_STUDENTS_REQUEST";
export const ADD_STUDENTS_SUCCESS = "ADD_STUDENTS_SUCCESS";
export const ADD_STUDENTS_FAILURE = "ADD_STUDENTS_FAILURE";

export const GET_A_STUDENT_REQUEST = "GET_A_STUDENT_REQUEST";
export const GET_A_STUDENT_SUCCESS = "GET_A_STUDENT_SUCCESS";
export const GET_A_STUDENT_FAILURE = "GET_A_STUDENT_FAILURE";

export const UPDATE_STUDENT_REQUEST = "UPDATE_STUDENT_REQUEST";
export const UPDATE_STUDENT_SUCCESS = "UPDATE_STUDENT_SUCCESS";
export const UPDATE_STUDENT_FAILURE = "UPDATE_STUDENT_FAILURE";

export const DELETE_A_STUDENT_REQUEST = "DELETE_A_STUDENT_REQUEST";
export const DELETE_A_STUDENT_SUCCESS = "DELETE_A_STUDENT_SUCCESS";
export const DELETE_A_STUDENT_FAILURE = "DELETE_A_STUDENT_FAILURE";

export const UPDATE_STUDENT_FORM = "UPDATE_STUDENT_FORM";

export const getAllStudents = () => {
  return async (dispatch) => {
    dispatch({ type: GET_STUDENTS_REQUEST });
    try {
      let url = `${process.env.REACT_APP_SERVER}/api/students`;
      let res = await axios.get(url);
      dispatch({ type: GET_STUDENTS_SUCCESS, payload: res.data });
    } catch (e) {
      console.log(e.response);
      dispatch({ type: GET_STUDENTS_FAILURE });
    }
  };
};

export const getAStudent = (id) => {
  return async (dispatch) => {
    dispatch({ type: GET_A_STUDENT_REQUEST });
    try {
      let url = `${process.env.REACT_APP_SERVER}/api/students/${id}`;
      let res = await axios.get(url);
      dispatch({ type: GET_A_STUDENT_SUCCESS, payload: res.data });
    } catch (e) {
      console.log(e.response);
      dispatch({ type: GET_A_STUDENT_FAILURE });
    }
  };
};

export const updateStudent = (id, student, navigate) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_STUDENT_REQUEST });
    try {
      let url = `${process.env.REACT_APP_SERVER}/api/students/${id}`;
      await axios.patch(url, student);
      dispatch({ type: UPDATE_STUDENT_SUCCESS });
      navigate("/");
    } catch (e) {
      console.log(e.response);
      dispatch({ type: UPDATE_STUDENT_FAILURE });
    }
  };
};

export const deleteStudent = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_A_STUDENT_REQUEST });
    try {
      let url = `${process.env.REACT_APP_SERVER}/api/students/${id}`;
      await axios.delete(url);
      dispatch({ type: DELETE_A_STUDENT_SUCCESS });
      dispatch(getAllStudents());
    } catch (e) {
      console.log(e.response);
      dispatch({ type: DELETE_A_STUDENT_FAILURE });
    }
  };
};

export const addStudents = (student, navigate) => {
  return async (dispatch) => {
    dispatch({ type: ADD_STUDENTS_REQUEST });
    try {
      let url = `${process.env.REACT_APP_SERVER}/api/students`;
      await axios.post(url, student);
      dispatch({ type: ADD_STUDENTS_SUCCESS });
      navigate("/");
    } catch (e) {
      console.log(e.response);
      dispatch({ type: ADD_STUDENTS_FAILURE });
    }
  };
};

export const updateStudentForm = (name, value) => {
  return {
    type: UPDATE_STUDENT_FORM,
    payload: {
      name,
      value,
    },
  };
};
