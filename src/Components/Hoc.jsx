import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FeedIcon from '@mui/icons-material/Feed';
import MenuIcon from '@mui/icons-material/Menu';

import img1 from '../Images/user1.webp';
import logo from '../Images/logo.png'
import { Drawer, IconButton, InputBase } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from "react-router-dom";

// Custom styled components for the search bar
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const Hoc = (Component) => {
  const NewComponent = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');

    const toggleDrawer = () => {
      setDrawerOpen(!drawerOpen);
    };

    return (
      <div className="dashboard-container">
        {isMobile ? (
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
            <div className="sidebar">
              <div className="logo">
              <h2><img src={logo} className="bg-white" alt="" height={28} width={32}/> TOS</h2>
              </div>
              <div className="sidebar-menu">
                <div className="menu-item">
                  <NavLink to="/dashboard" onClick={toggleDrawer}>
                    <span><DashboardIcon/>Dashboard</span>
                  </NavLink>
                </div>
                <div className="menu-item">
                  <NavLink to="/user" onClick={toggleDrawer}>
                    <span><AccountCircleIcon /> Users</span>
                  </NavLink>
                </div>
                <div className="menu-item">
                  <NavLink to="/newsfeed" onClick={toggleDrawer}>
                    <span><FeedIcon /> NewsFeed</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </Drawer>
        ) : (
          <div className="sidebar">
            <div className="logo">
              <h2><img src={logo} className="bg-white" alt="" height={28} width={32}/> TOS</h2>
            </div>
            <div className="sidebar-menu">
            <h6 className=" text-white ms-3 mb-2">Main Menu</h6>
              <div className="menu-item">
                <NavLink to="/dashboard">
                  <span><DashboardIcon className="icons" />Dashboard</span>
                </NavLink>
              </div>
              <div className="menu-item">
                <NavLink to="/user">
                  <span><AccountCircleIcon /> Users</span>
                </NavLink>
              </div>
              <div className="menu-item">
                <NavLink to="/newsfeed">
                  <span><FeedIcon /> NewsFeed</span>
                </NavLink>
              </div>
              {/* <h6 className="text-center text-dark">Profile Menu</h6> */}
              <div className="logout-wrapper">
              <NavLink to='/login'><LogoutIcon/>Logout</NavLink>  
              </div>
            </div>
          </div>
        )}

        <div className="main-content">
          <div className="header d-flex justify-content-between p-2">
            {isMobile ? (
              <IconButton onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            ) : (
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            )}
            <div>
              <img src={img1} alt="" className="img-fluid rounded-pill" width={40} height={30} />
            </div>
          </div>
          <div className="content">
            <Component />
          </div>
        </div>
      </div>
    );
  };
  return NewComponent;
};
