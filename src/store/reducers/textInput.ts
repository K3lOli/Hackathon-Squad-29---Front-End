import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const textInputSlice = createSlice({
    name: "textInput",
    initialState: "",
    reducers: {
        setText: (_state, action: PayloadAction<string>) => {
            if (action.payload === "") {
                return ""; // Redefina a pesquisa para um valor vazio
            } else {
                return action.payload; // Mantenha a pesquisa como está se não for vazia
            }
        },
    },
});

export const { setText } = textInputSlice.actions;
export default textInputSlice.reducer;
