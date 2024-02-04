import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./reducers/login";
import projetosSlice from "./reducers/projetos";
import textInputSlice from "./reducers/textInput";

const store = configureStore({
    reducer: {
        login: loginSlice,
        projetos: projetosSlice,
        input: textInputSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
