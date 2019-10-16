import { words } from "../Data/data";
import * as fromAction from "./actions";

export const initalState = {
  loaded: false,
  loading: false,
  data: words
};

export function reducer(
  state = initalState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case fromAction.ADD_SYNONYM: {
      const synonym = action.payload;
      const data = [...state.data, synonym];
      return {
        ...state,
        data
      };
    }
    case fromAction.ADD_WORD: {
      let newData: any = [];
      state.data.forEach(item => {
        if (item.name === action.payload.name) {
          // item.payload.concat(action.payload.name);
          // somehow here contact don't work so I will make it manually TODO:: fix this with concat;
          action.payload.payload.forEach(items => {
            item.payload.push(items);
          });
        }
      });
      newData = state.data;
      return {
        ...state,
        newData
      };
    }
  }

  return state;
}
