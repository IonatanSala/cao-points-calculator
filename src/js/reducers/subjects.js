import { TOGGLE_SUBJECT_MODAL, ADD_SUBJECT } from "../actions/actionTypes"

const subject = (state = [], action) => {
  switch (action.type) {
    case ADD_SUBJECT:
      return state.concat(action.subject)
    default:
      return state
  }
}

const subjects = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_SUBJECT_MODAL:
      return Object.assign({}, state, { subjectModalVisibility: !action.modalState })
    case ADD_SUBJECT:
      let new_subject = subject(state.subjects, action);
      return Object.assign({}, state, { subjects:  new_subject})
    default:
      return state
  }
}

export default subjects
