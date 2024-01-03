import React from "react";

import { configureStore } from '@reduxjs/toolkit'
import { userManagement } from './components/module/UserManagement/userManager.reducer'
import { userManagementSearch } from './components/shared/SearchComponent/SearchComponent.reducer'
import { theContainer } from "./components/container/container.reducer"

export const store = configureStore({
    reducer: {
        userManagement: userManagement.reducer,
        setSideBar: theContainer.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch