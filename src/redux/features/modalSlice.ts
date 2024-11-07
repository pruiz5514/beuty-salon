import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modalSlice",
    initialState: {
        isOpen: false
    },
    reducers: {
        openModal: (state) => {
            state.isOpen = true;
        },
        closeModal: (state) => {
            state.isOpen = false;
        }
    }
})

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;