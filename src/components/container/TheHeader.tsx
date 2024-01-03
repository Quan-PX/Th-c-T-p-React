import { CContainer, CNavbar, CNavbarBrand, CNavItem, CNavLink } from '@coreui/react-pro';
// import React from "react";
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../assets/css/components.css';
import { RootState } from '../../store';
import setTheSideBar from './container.reducer';

// interface TheHeader{
//     setShowSideBar: (keys:boolean) => void
//     showSideBar: boolean
// }

const TheHeader = () => {
  // const {setShowSideBar, showSideBar} = props

  const { theContainer } = useSelector((state: RootState) => state.setSideBar);
  const dispatch = useDispatch();

  // const showSIdeBar = () => () =>{
  //     setShowSideBar(!showSideBar)
  // }

  return (
    <div className="siderbar">
      <CNavbar expand="lg" colorScheme="light" className="bg-light">
        <CContainer fluid>
          <div className="d-flex align-items-center">
            <CNavLink href="#" type="button" onClick={() => dispatch(setTheSideBar.showSideBar(!theContainer))}>
              <Icon icon="cil:list-rich" style={{ fontSize: '24px', color: 'black', marginRight: '10px' }} />
            </CNavLink>
            <CNavbarBrand href="" className="h1">
              Navbar
            </CNavbarBrand>
            <CNavItem className="navbar-items">
              <CNavLink href="#" className="navbar-link">
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem className="navbar-items">
              <CNavLink href="#" className="navbar-link">
                Users
              </CNavLink>
            </CNavItem>
            <CNavItem className="navbar-items">
              <CNavLink href="#" className="navbar-link">
                Settings
              </CNavLink>
            </CNavItem>
          </div>
          <div className="d-flex align-items-center">
            <CNavItem className="navbar-items p-3">
              <Link to="/calculator" className="navbar-items">
                Calculator
              </Link>
            </CNavItem>
            <CNavItem className="navbar-items p-3">
              <Link to="/emojiSearch" className="navbar-items">
                Emoji Search
              </Link>
            </CNavItem>
            <CNavItem className="navbar-items p-3">
              <Link to="/snapshot" className="navbar-items">
                SnapShot
              </Link>
            </CNavItem>
            <CNavItem className="navbar-items p-3">
              <Link to="/animal" className="navbar-items">
                animal
              </Link>
            </CNavItem>
            <CNavItem className="navbar-items p-3">
              <Link to="/table1" className="navbar-items">
                Table 1
              </Link>
            </CNavItem>
            <CNavItem className="navbar-items p-3">
              <Link to="/table2" className="navbar-items">
                Table 2
              </Link>
            </CNavItem>
            <CNavItem className="navbar-items">
              <CNavLink href="#">
                <Icon icon="akar-icons:bell" style={{ fontSize: '24px', color: 'black', marginRight: '10px' }} />
              </CNavLink>
            </CNavItem>
            <CNavItem className="navbar-items">
              <CNavLink href="#">
                <Icon icon="cil:library-building" style={{ fontSize: '24px', color: 'black', marginRight: '10px' }} />
              </CNavLink>
            </CNavItem>
            <CNavItem className="navbar-items">
              <CNavLink href="#">
                <Icon icon="cil:envelope-closed" style={{ fontSize: '24px', color: 'black', marginRight: '10px' }} />
              </CNavLink>
            </CNavItem>
          </div>
        </CContainer>
      </CNavbar>
    </div>
  );
};

export default TheHeader;
