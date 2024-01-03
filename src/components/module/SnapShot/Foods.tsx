import { CCol, CContainer, CImage, CRow } from "@coreui/react-pro";
// import React from "react";
import food_1 from "../../../assets/image/food_1.jpg"
import food_2 from "../../../assets/image/food_2.jpg"
import food_3 from "../../../assets/image/food_3.jpg"
import food_4 from "../../../assets/image/food_4.jpg"

const Foods = () =>{

    const arrImgFoods: string[] = [food_1, food_2, food_3, food_4, food_3, 
        food_2 ,food_1 ,food_3 ,food_4 ]

    return (
        <>
        <CContainer>
            <CRow>
                {arrImgFoods.map(ele =>
                    <CCol sm={4} className='pt-3'> <CImage fluid src={ele} /></CCol>
                )}
                
            </CRow> 
        </CContainer>
        </>
    )
}

export default Foods