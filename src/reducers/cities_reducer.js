import cities from '../../data/cities';

export default function(state = cities, action) {
  // handle actions
  switch (action.type) {
    case 'SET_CITIES':
      return action.payload;
    default:
      return state;
  }
}
