import { createStore } from 'redux';

const initialState = {
  isLight: false,
  user:null
}

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD_USER'){
    return {
      ...state,
      user: action.payload
    }
  }
  if (action.type === 'EDIT_USER'){
    return {
      ...state,
      user: action.payload
    }
  }
  if (action.type === 'REMOVE_USER'){
    return {
      ...state,
      user: null
    }
  }

  if (action.type === 'SWITCH_MODE'){
    return {
      ...state,
      isLight: !state.isLight
    }
  }
  return state
}

const store = createStore(reducer);

export default store;