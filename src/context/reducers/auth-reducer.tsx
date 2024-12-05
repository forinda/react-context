import { AppState, AuthActions } from "../../types";

export const authReducer = (state: AppState["auth"], action: AuthActions) => {
    console.log({action});
    
    switch (action.type!) {
        case "LOGIN":
            return {
                ...state,
                ...action.payload,
                is_authenticated: true,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
                is_authenticated: false,
            };
        default:
            return state;
    }
};