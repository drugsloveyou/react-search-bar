import { handleActions } from 'redux-actions';
import { SearchListByNameAction } from '../actions/SearchBar';

const initialState: any = [];

export default handleActions(
  {
    [SearchListByNameAction]: (state, actions) => {
      return actions.payload || [];
    },
  },
  initialState
);
