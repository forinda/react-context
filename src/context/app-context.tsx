import { createContext, useReducer } from "react";
import {
  Actions,
  AppState,
  AuthActions,
  ContextType,
  ThemeActions,
} from "../types";
import { allActions } from "./actions";
import { authReducer } from "./reducers/auth-reducer";
import { themeReducer } from "./reducers/theme-reducer";

const initialState: AppState = {
  auth: null,
  theme: {
    theme: "light",
  },
};

const AppContext = createContext<ContextType>({
  dispatch: null,
  state: initialState,
  actions: allActions,
});

type ProviderProps = {
  children: React.ReactNode;
};

const combinedReducer = (state: AppState, action: Actions) => ({
  auth: authReducer(state.auth, action as AuthActions),
  theme: themeReducer(state.theme, action as ThemeActions),
});

const AppProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(combinedReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch, actions: allActions }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
