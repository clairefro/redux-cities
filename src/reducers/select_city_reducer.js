export default function(state = null, action) {
  // handle actions
  switch (action.type) {
    case 'SELECT_CITY':
      return action.payload;
    default:
      return state;
  }
}
