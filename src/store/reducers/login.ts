import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Login {
  email: string | null | undefined;
  nome: string | null | undefined;
  img: string | null | undefined;
}

let initialState: Login[] = [{
    email: null,
    nome: null,
    img: null,
}]

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Login>) => {
            // Atualiza o estado com os dados do usuário logado
            state[0].email = action.payload.email;
            state[0].nome = action.payload.nome;
            state[0].img = action.payload.img;
        },
    logout: (state) => {
        // Limpa o estado ao fazer logout
        state[0].email = null;
        state[0].nome = null;
        state[0].img = null;
    },
  }
})

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;