import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IUsers} from '../../../shared/model/users.model'
import MOCKDATA from '../../../assets/json/MOCK_DATA.json'


interface SearchComponentReducer{
    userSearch: IUsers[]
}
const initialState : SearchComponentReducer = {
    userSearch: MOCKDATA,
}

export const userManagementSearch = createSlice({
    name: 'usesManagerSearch',
    initialState,
    reducers: {
        search: (state:SearchComponentReducer, action: PayloadAction<string>) =>{
            state.userSearch.map((ele) => 
                ele.first_name.toLocaleLowerCase().search(action.payload.trim().toLocaleLowerCase()) !== -1
            )
        }
    }
})

export default userManagementSearch.actions