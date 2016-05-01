import { TOGGLE_SUBJECT_MODAL, ADD_SUBJECT } from "../actions/actionTypes"

const subject = (state, action) => {
  switch (action.type) {
    case ADD_SUBJECT:
      return {
        
      }
    default:

  }
}

const subjects = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_SUBJECT_MODAL:
      return Object.assign({}, state, { subjectModalVisibility: !action.modalState })
    case ADD_SUBJECT
      var subject = subject(undefined, action)
      return Object.assign({}, state, {subjects: state.subjects.concat(action.subject)})
    default:
      return state
  }
}

export default subjects
