import { ActionTypes } from "../actiontype/actiontype";

const addItem =[];

export const addItems = (state = addItem, action) => {
  switch (action.type) {
    case ActionTypes.ADDITEM:
      return[
        ...state, action.payload
      ]
    break;

    case ActionTypes.DELITEM:
      return state = state.filter((x) => {
        return x.id !== action.payload.id
      })
    break;

    default:
      return state;
    break
  }
}