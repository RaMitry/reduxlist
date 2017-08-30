import { ADD_ITEM, UPDATE_ITEM, TOGGLE_ITEM_DONE, DELETE_ITEM, HOLD_EDIT_MODE } from './actions';
import _ from 'lodash';

const addItem = (state = [], action) => {
  return [
    ...state,
    {
      content: action.content,
      done: false,
      key: Date.now(),
      editMode: false
    }
  ]
};

const toggleItemDone = (state = [], action) => {
    let newState = _.clone(state);
    let index = _.findIndex(newState, {'key': action.id});
    newState[index].done = !newState[index].done;
    return newState;
};

const updateItem = (state = [], action) => {
  let newState = _.clone(state);
  let index = _.findIndex(newState, {'key': action.id});
  newState[index].content = action.content;
  newState[index].editMode = false;
  return newState;
};

const deleteItem = (state = [], action) => {
  let newState = _.clone(state);
  let index = _.findIndex(newState, {'key': action.id});
  return _.without(newState, newState[index]);
};

const holdEditMode = (state = [], action) => {
  let newState = _.clone(state);
  let index = _.findIndex(newState, {'key': action.id});
  newState[index].editMode = true;
  return newState;
};

export const todoApp = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM: return addItem(state, action);
    case UPDATE_ITEM: return updateItem(state, action);
    case TOGGLE_ITEM_DONE: return toggleItemDone(state, action);
    case DELETE_ITEM: return deleteItem(state, action);
    case HOLD_EDIT_MODE: return holdEditMode(state, action);
    default: return state;
  }
};
