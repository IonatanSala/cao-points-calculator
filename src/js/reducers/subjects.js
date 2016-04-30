import { TOGGLE_SUBJECT_MODAL } from "../actions/actionTypes"

const subjects = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_SUBJECT_MODAL:
      return Object.assign({}, state, { subjectModalVisibility: !action.modalState })
    default:
      return state
  }
}

export default subjects
