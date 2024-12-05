import { ThemeActions, ThemeState } from "../../types";

export const themeReducer = (state: ThemeState, action: ThemeActions) => {
    
    switch (action.type!) {
      case "TOGGLE_THEME":
        return {
          ...state,
          theme: action.payload!,
        };
      case "INIT_THEME":
        return state;
      default:
        return state;
    }
  };