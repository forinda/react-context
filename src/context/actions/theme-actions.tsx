import { ThemeState } from "../../types";

export const themeActions = {
    toggle: (state: Pick<ThemeState, "theme">["theme"]) =>
    ({
        type: "TOGGLE_THEME",
        payload: state === "light" ? "dark" : "light",
    } as const),
    init: () =>
    ({
        type: "INIT_THEME",
    } as const),
};
