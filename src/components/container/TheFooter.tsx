import { CFooter, CLink, CNavLink } from "@coreui/react-pro";
import { Icon } from "@iconify/react";
// import React from "react";


const TheFooter = () =>{


    return (
        <CFooter className="">
        <div className="d-flex justify-content-center align-items-center bg-light">
                <CNavLink href="#">
                         <Icon icon="akar-icons:facebook-fill"  style={{ fontSize: "24px", color: "black", margin: "10px" }}/>
                    </CNavLink>
                 <CNavLink href="#">
                         <Icon icon="akar-icons:telegram-fill"  style={{ fontSize: "24px", color: "black", margin: "10px" }}/>
                    </CNavLink>
                    <CNavLink href="#">
                         <Icon icon="akar-icons:github-fill"  style={{ fontSize: "24px", color: "black", margin: "10px" }}/>
                    </CNavLink>
                    <CNavLink href="#">
                         <Icon icon="akar-icons:google-contained-fill"  style={{ fontSize: "24px", color: "black", margin: "10px" }}/>
                    </CNavLink>
                    <CNavLink href="#">
                         <Icon icon="icon-park-solid:youtobe"  style={{ fontSize: "24px", color: "black", margin: "10px" }}/>
                    </CNavLink>
                    <CNavLink href="#">
                         <Icon icon="noto-v1:banana"  style={{ fontSize: "24px", color: "black", margin: "10px" }}/>
                    </CNavLink>
                    <CNavLink href="#">
                         <Icon icon="bi:person-rolodex"  style={{ fontSize: "24px", color: "black", margin: "10px" }}/>
                    </CNavLink>
        </div>
        <div className="d-flex align-items-center justify-content-between bg-secondary">
            <div >
                <span>Powered by</span>
                <CLink href="">Quân</CLink>
            </div>
            <div>
                <h3>QuânPX</h3>
            </div>
        </div>
      </CFooter>
    )
}

export default TheFooter