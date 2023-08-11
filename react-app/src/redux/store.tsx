import { createStore } from "redux";

interface State {
  inputValue: string;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: State = {
  inputValue: "",
};

const rootReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "SET_INPUT_VALUE":
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
