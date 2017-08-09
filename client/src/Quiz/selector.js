// TODO reselect
export function getQuestions(state) {
  return state.questions;
}

export function hasQuestions(state) {
  return state.questions.length > 0;
}
