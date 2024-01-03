import { CButton, CContainer } from "@coreui/react-pro";
import  { useState } from "react";
import SearchComponent from "../../shared/SearchComponent/SearchComponent";
import { Link, Outlet } from "react-router-dom";

const SnapShot = () =>{

    const [snapshot, setSnapshot] = useState<string>("")

    return (
        <>
            <CContainer className="d-flex justify-content-center flex-column align-items-center">
                <h1>SnapShot</h1>
                <SearchComponent setUserSearch={setSnapshot}/>
                <div className="p-2">
                <Link to={'moutains'}><CButton className="m-2">Moutain</CButton></Link>    
                <Link to={'beaches'}><CButton  className="m-2">Beaches</CButton></Link>     
                <Link to={'birds'}><CButton  className="m-2">Birds</CButton></Link>    
                <Link to={'foods'}><CButton  className="m-2">Food</CButton></Link>     
                </div>

                <Outlet />
            </CContainer>
        </>
    )
}

export default SnapShot