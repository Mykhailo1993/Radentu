
import { AnyAction } from "redux";

export const SET_TOKEN = 'SET_TOKEN';

interface UserStore {
  token: string;
}

type ActionTypes = {
      type: typeof SET_TOKEN;
      token: string;
    };

const initialState: UserStore = {
  token: '',
};

export default (state: UserStore = initialState, action: AnyAction  | ActionTypes) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

