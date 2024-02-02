import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import imgDefault from "../../../public/foto-perfil.png";

interface Login {
    email: string | null | undefined;
    nome?: string | null | undefined;
    img?: string | null | undefined;
    isAuth: boolean;
}

const initialState: Login[] = [
    {
        email: null,
        nome: null,
        img: null,
        isAuth: false,
    },
];

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<Login>) => {
            // Atualiza o estado com os dados do usuário logado
            state[0].email = action.payload.email;
            state[0].nome = action.payload.nome;
            state[0].img = action.payload.img = action.payload.img
                ? action.payload.img
                : imgDefault;
            state[0].isAuth = true;
            console.log(action.payload.img);
        },
        logout: (state) => {
            // Limpa o estado ao fazer logout
            state[0].email = null;
            state[0].nome = null;
            state[0].img = null;
            state[0].isAuth = false;
        },
    },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
