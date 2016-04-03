/**
 * Created by stackia on 4/4/16.
 */
export default (state = 6000, action) => {
  switch (action.type) {
    case 'SET_ROUND_TIME':
      return action.value;

    default:
      return state;
  }
};
