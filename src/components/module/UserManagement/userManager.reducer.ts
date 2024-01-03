import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsers } from "../../../shared/model/users.model";
import MOCKDATA from "../../../assets/json/MOCK_DATA.json";
// import { stringify } from 'querystring';

interface IInitialState {
  users: IUsers[];
  setButton: boolean;
  setIndexEdit: number | undefined;
}

const initialState: IInitialState = {
  users: MOCKDATA,
  setButton: true,
  setIndexEdit: undefined,
};

export const userManagement = createSlice({
  name: "userManager",
  initialState,
  reducers: {
    reset: (state: IInitialState) => {
      state.users = MOCKDATA;
    },
    found: (state: IInitialState, action: PayloadAction<IUsers[]>) => {
      state.users = action.payload;
    },
    add: (state: IInitialState, action: PayloadAction<IUsers[]>) => {
      state.users = action.payload;
    },
    edit: (state: IInitialState, action: PayloadAction<IUsers[]>) => {
      state.users = action.payload;
    },
    // updateUser: (state: IInitialState, action: PayloadAction<IUsers[]>) => {
    //   state.users = action.payload;
    // },
    delete: (state: IInitialState, action: PayloadAction<IUsers[]>) => {
        state.users = action.payload
    },
    setButtonAddvsEdit: (
      state: IInitialState,
      action: PayloadAction<boolean>
    ) => {
      state.setButton = action.payload;
    },
  },
});

export default userManagement.actions;
