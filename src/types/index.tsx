import { allActions } from "../context/actions"
import { authActions } from "../context/actions/auth-actions"
import { themeActions } from "../context/actions/theme-actions"

export type ThemeState = {
    theme: 'light' | 'dark'
}

type User = {
    username: string
}
export type AuthState = {
    user: User
    is_authenticated: boolean
}

export type AppState = {
    auth: AuthState | null
    theme: ThemeState
}

export type AuthActions = ReturnType<(typeof authActions)[keyof typeof authActions]>;
export type ThemeActions = ReturnType<
  (typeof themeActions)[keyof typeof themeActions]
>;

export type Actions = AuthActions | ThemeActions;

export type ContextType = {
  state: AppState;
  dispatch: React.Dispatch<Actions> | null;
  actions: typeof allActions;
};

