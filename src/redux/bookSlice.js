import { createSlice } from "@reduxjs/toolkit"
import books from "../utils/bookData"

const bookSlice = createSlice({
    name: "books",
    initialState: {
        items: [...books]
    },
    reducers: {
        addBook: (state, action) => {
            state.items.unshift(action.payload);
        }
    }
})

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;