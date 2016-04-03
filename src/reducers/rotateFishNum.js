/**
 * Created by stackia on 4/4/16.
 */
export default (state = 0, action) => {
  switch (action.type) {
    case 'SET_ROTATE_FISH_NUM':
      return action.value;

    default:
      return state;
  }
};
