const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

function playerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case '':
    return state;
  default:
    return state;
  }
}

export default playerReducer;
