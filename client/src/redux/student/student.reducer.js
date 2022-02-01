import * as studentAction from "./student.action";

let initialState = {
  loading: false,
  students: [],
  selectedStudent: {},
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case studentAction.GET_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case studentAction.GET_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        students: action.payload.allStudent,
      };
    case studentAction.GET_STUDENTS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case studentAction.GET_A_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case studentAction.GET_A_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedStudent: action.payload.student,
      };
    case studentAction.GET_A_STUDENT_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case studentAction.ADD_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case studentAction.ADD_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case studentAction.ADD_STUDENTS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case studentAction.DELETE_A_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case studentAction.DELETE_A_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case studentAction.DELETE_A_STUDENT_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case studentAction.UPDATE_STUDENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case studentAction.UPDATE_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case studentAction.UPDATE_STUDENT_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case studentAction.UPDATE_STUDENT_FORM:
      let updatedStudent = {
        ...state.selectedStudent,
        [action.payload.name]: action.payload.value,
      };
      return {
        ...state,
        selectedStudent: updatedStudent,
      };
    default:
      return state;
  }
};
