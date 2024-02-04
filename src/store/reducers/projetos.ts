import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Usuario {
    _id: string;
    createdAt: string;
    email: string;
    nome: string;
    updatedAt: string;
    __v: number;
}

interface Projetos {
    _id: string;
    createdAt: string;
    descricao: string;
    imagem_mimeType: string;
    imagem_name: string;
    imagem_url: string;
    link: string;
    tags: string[];
    titulo: string;
    updatedAt: string;
    usuario_id: string;
    __v: number;
    usuario: Usuario;
}

const initialState: Projetos[] = [];

const projetosSlice = createSlice({
    name: "projetos",
    initialState,
    reducers: {
        getProjetos: (state, action: PayloadAction<Projetos[]>) => {
            state.push(...action.payload);
        },
    },
});

export const { getProjetos } = projetosSlice.actions;
export default projetosSlice.reducer;
