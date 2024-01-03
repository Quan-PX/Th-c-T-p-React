import React from "react";
import { Link, Outlet } from "react-router-dom";
import Moutain from "../SnapShot/Moutain";
import SnapShot from "../SnapShot/Snapshot";

const Animals =() =>{


    return(
        <>
            <h1>Trang Chủ Animals</h1>
            <Link to={"cat"}>Cats</Link>
            <Link to={"dog"}>Dogs</Link>
            <Link to={"mouse"}>Mouse</Link>
            {/* <Outlet/> */}
            {/* <SnapShot /> */}
            {/* <Moutain /> */}
        </>
    )
}

export default Animals