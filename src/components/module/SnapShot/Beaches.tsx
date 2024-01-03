import { CCol, CContainer, CImage, CRow } from "@coreui/react-pro";
// import React from "react";
import beaches_1 from "../../../assets/image/beaches_1.jpg"
import beaches_2 from "../../../assets/image/beaches_2.jpg"
import beaches_3 from "../../../assets/image/beaches_3.webp"
import beaches_4 from "../../../assets/image/beaches_4.jpg"


const Beaches = () =>{

    const arrImgBeaches: string[] = [beaches_1,
        beaches_2,
        beaches_3,
        beaches_4,
        beaches_3,
        beaches_2,
        beaches_1,
        beaches_3,
        beaches_4]

    return (
        <>
        <CContainer>
            <CRow>
                {arrImgBeaches.map(ele =>
                        <CCol sm={4} className="pt-3"><CImage fluid src={ele} /></CCol>
                )}
            </CRow>
        </CContainer>
        </>
    )
}

export default Beaches