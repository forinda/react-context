import { AppState } from "../../types";

export const authActions = {
    login: (auth: Pick<AppState, 'auth'>["auth"]) =>
    ({
        type: "LOGIN",
        payload: auth,
    } as const),
    logout: () =>
    ({
        type: "LOGOUT",
    } as const),
};