import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITheContainer{
    theContainer: boolean
}

const initialState: ITheContainer = {
    theContainer: true
}

export const theContainer = createSlice({
    name: "theSideBar",
    initialState,
    reducers: {
        showSideBar: (state: ITheContainer, action: PayloadAction<boolean>) =>{
                state.theContainer = action.payload
        }
    }
})

export default theContainer.actions