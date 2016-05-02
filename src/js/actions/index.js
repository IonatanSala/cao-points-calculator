import { TOGGLE_SUBJECT_MODAL, ADD_SUBJECT, FILTER_SUBJECT, FILTER_GRADE, FILTER_LEVEL } from './actionTypes'

// action creators

// toggle between adding a subject from the modal
export const toggleSubjectModal = (modalState) => {
  return {
    type: TOGGLE_SUBJECT_MODAL,
    modalState,
  }
}

// add a new subject to the screen
export const addSubject = (subject) => {
  return {
    type: ADD_SUBJECT,
    subject,
  }
}

function _calculatePoints(level, grade) {
  
}

// filter between the subject that is on the screen
export const filterSubject = ({subject, level, grade}) => {
  return {
    type: FILTER_SUBJECT,
    subject: {
      id: Time.now(),
      subject,
      level,
      grade,
    }
  }
}

// filter between the grade of the subject
export const filterGrade = (grade) => {
  return {
    type: FILTER_GRADE,
    grade,
  }
}

// filter between the level of the subject
export const filterLevel = (level) => {
  return {
    type: FILTER_LEVEL,
    level,
  }
}
