/*
 * action types
 */

export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const TOGGLE_ITEM_DONE = 'TOGGLE_ITEM_DONE';
export const HOLD_EDIT_MODE = 'HOLD_EDIT_MODE';

/*
 * action creators
 */

export function addItem(content) {
  return { type: ADD_ITEM, content }
}

export function updateItem(id, content) {
 return { type: UPDATE_ITEM, id, content }
}

export function deleteItem(id) {
  return { type: DELETE_ITEM, id }
}

export function toggleItemDone(id) {
  return { type: TOGGLE_ITEM_DONE, id }
}

export function holdEditMode(id) {
  return { type: HOLD_EDIT_MODE, id }
}
