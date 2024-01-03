import { CButton, CFormInput } from "@coreui/react-pro";
import  { useState } from "react";
import { useDispatch } from "react-redux";
import "./SearchComponent.css"


interface SearchComponent{
    setUserSearch: (keys: string) => void,
}

const SearchComponent = (props:SearchComponent) => {
    const { setUserSearch } = props

    const [input, setInput] = useState<string>("")

    return (
        <div className=" d-flex p-2">
            <CFormInput 
            type="text"
            label="Found Users:"
            placeholder="last name"
            className="m-2"
            onChange={(e) => setInput(e.currentTarget.value)}
            />
            <div className="m-2">
                <CButton onClick={() => setUserSearch(input)}>Found</CButton>
            </div>
        </div>
    )
}

export default SearchComponent