import { CCol, CContainer, CImage, CRow } from "@coreui/react-pro";
// import React from "react";
import birds_1 from "../../../assets/image/birds_1.webp"
import birds_2 from "../../../assets/image/birds_2.jpg"
import birds_3 from "../../../assets/image/birds_3.webp"
import birds_4 from "../../../assets/image/birds_4.webp"


const Birds = () =>{

    const arrImgBirds : string[] = [birds_1,
        birds_2,
        birds_4,
        birds_3,
        birds_2,
        birds_4,
        birds_1,
        birds_4,
        birds_3]

    return (
        <>
        <CContainer>
            <CRow>
                {arrImgBirds.map(ele =>
                        <CCol sm={4} className="pt-3"><CImage fluid src={ele} /></CCol>
                 )}
            </CRow>
        </CContainer>
        </>
    )
}

export default Birds