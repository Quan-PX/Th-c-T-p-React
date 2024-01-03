import { CCol, CContainer, CImage, CRow } from "@coreui/react-pro";
// import React from "react";
// import { dataImage } from "../../../shared/model/dataImage.model";
import moutain_1 from "../../../assets/image/moutain_1.jpg"
import moutain_2 from "../../../assets/image/moutain_2.jpg"
import moutain_3 from "../../../assets/image/moutain_4.webp";

const Moutain = () =>{

    const arrImgMoutain : string[] = [ moutain_1,
        moutain_2,
        moutain_3,
        moutain_1,
        moutain_2,
        moutain_3,
        moutain_1,
        moutain_3,
        moutain_2]

    return (
        <>
        <CContainer>
            <CRow>
                {arrImgMoutain.map(ele => 
                <CCol sm={4} className="pt-3"> <CImage fluid src={ele} /> </CCol>
                )}
            </CRow>
        </CContainer>
        </>
    )
}

export default Moutain