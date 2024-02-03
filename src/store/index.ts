import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./reducers/login";
import projetosSlice from "./reducers/projetos";

const store = configureStore({
    reducer: {
        login: loginSlice,
        projetos: projetosSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
