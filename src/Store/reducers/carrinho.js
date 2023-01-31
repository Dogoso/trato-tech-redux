import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const carrinhoSlice = createSlice({
    name: "carrinho",
    initialState,
    reducers: {
      mudarCarrinho: (state, { payload }) => {
        const haveItem = state.some(item => item.id === payload);
        if(!haveItem) return [...state, { id: payload, quantidade: 1 }];
        return state.filter(item => item.id !== payload);
      },
      alterarQuantidade: (state, { payload }) => {
        const curItem = state.find(item => item.id === payload.id);
        curItem.quantidade += payload.quantidade;
        state = state.map(item => item.id === curItem.quantidade ? curItem : item)
      }
    }
});

export const { mudarCarrinho, alterarQuantidade } = carrinhoSlice.actions;
export const carrinhoReducer = carrinhoSlice.reducer;