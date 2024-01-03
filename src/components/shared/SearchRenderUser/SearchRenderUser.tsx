import { CFormInput } from "@coreui/react-pro";
import React, { useState } from "react";
import "../../../assets/css/components.css"

interface SearchRenderUser{
    setSearch : (keys:string) => void
}
const SearchRenderUser = (props:SearchRenderUser) => {
    const {setSearch} = props
    const [SearchRenderUser, setSearchIcon] = useState<string>('')
    setSearch(SearchRenderUser)

    return (
        <div>
    <div className={`SearchUsers p-3`}>
        <div className="h-90 d-flex"></div>
            <CFormInput 
                type="text"
                label="Search Icon:"
                placeholder="Icon"
                onChange={(e) => setSearchIcon(e.currentTarget.value)}
            />
        
        </div>
    </div>
    )
}

export default SearchRenderUser