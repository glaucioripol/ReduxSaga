import { combineReducers } from 'redux';

import { charactersRetrieveReducer } from './Retrieve/reducers';

const crudCharacters = combineReducers({
  charactersRetrieveReducer,
});

export { crudCharacters };
