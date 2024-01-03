import {
    CNavGroup,
    CNavItem,
    CNavTitle,
    CSidebar,
    CSidebarBrand,
    CSidebarNav,
    CSidebarToggler,
} from '@coreui/react-pro';
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';
// import React from "react";
import '../../assets/css/components.css';
import { RootState } from '../../store';
// import TheHeader from "./TheHeader";

// interface TheSideBar{
//     showSideBar: boolean
// }

const TheSideBar = () => {
  // const {showSideBar} = props

  const { theContainer } = useSelector((state: RootState) => state.setSideBar);

  return (
    <CSidebar className={`sidebar ${theContainer ? 'd-block' : 'd-none'} col-sm-2 p-0`}>
      <CSidebarBrand className="sidebar-brand p-3">Sidebar Brand</CSidebarBrand>
      <CSidebarNav className="p-2 sidebar-box">
        <CNavTitle className="sidebar-title">Nav Title</CNavTitle>
        <CNavItem href="#" className="sidebar-items">
          <Icon icon="cil:av-timer" style={{ fontSize: '24px', color: 'secondary', marginRight: '15px' }} />
          Calculator
        </CNavItem>
        <CNavItem href="#" className="sidebar-items">
          <Icon icon="cil:av-timer" style={{ fontSize: '24px', color: 'secondary', marginRight: '15px' }} />
          Emoji Search
        </CNavItem>
        <CNavItem href="#" className="sidebar-items">
          <Icon icon="cil:av-timer" style={{ fontSize: '24px', color: 'secondary', marginRight: '15px' }} />
          SnapShot
        </CNavItem>

        <CNavTitle className="sidebar-title">Content</CNavTitle>
        <CNavItem href="#" className="sidebar-items">
          <Icon icon="cil:av-timer" style={{ fontSize: '24px', color: 'secondary', marginRight: '15px' }} />
          animal
        </CNavItem>
        <CNavItem href="#" className="sidebar-items">
          <Icon icon="cil:av-timer" style={{ fontSize: '24px', color: 'secondary', marginRight: '15px' }} />
          Table 1
        </CNavItem>
        <CNavItem href="#" className="sidebar-items">
          <Icon icon="cil:av-timer" style={{ fontSize: '24px', color: 'secondary', marginRight: '15px' }} />
          Table 2
        </CNavItem>

        <CNavItem href="#" className="sidebar-items">
          <Icon icon="cil:send" style={{ fontSize: '24px', color: 'secondary', marginRight: '15px' }} />
          <CNavGroup toggler="Buttons">
            <CNavItem href="#" className="sidebar-items">
              <Icon icon="cil:av-timer" style={{ fontSize: '24px', color: 'secondary', marginRight: '15px' }} /> Nav
              dropdown item
            </CNavItem>
            <CNavItem href="#" className="sidebar-items">
              <Icon icon="cil:av-timer" style={{ fontSize: '24px', color: 'secondary', marginRight: '15px' }} /> Nav
              dropdown item
            </CNavItem>
          </CNavGroup>
          <CSidebarToggler />
        </CNavItem>
      </CSidebarNav>
    </CSidebar>
  );
};

export default TheSideBar;
