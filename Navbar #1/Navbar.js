import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography, useTheme } from '@material-ui/core'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AlbumIcon from '@material-ui/icons/Album';
import logo from '../../images/logo.png';
import empowerx from '../../images/empowerx.jpeg';
import FeedbackIcon from '@material-ui/icons/Feedback';
import './Navbar.css';

import clsx from 'clsx';

// app drawer
const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });


function Navbar() {

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>

      <Box
                display="flex"
                onClick={() => {
                  window.location = "/";
                }}
              >
              <img src = {empowerx} style={{height:"250px", width:"250px", objectFit:"contain", margin:"0"}} />

              </Box>
      
      <div className = "listgrp">
      <ListItem
            button
            onClick={() => {
              window.location = "/";
            }}
            >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
        </ListItem>

        <ListItem
            button
            onClick={() => {
              window.location = "/Podcasts";
            }}
            >
            <ListItemIcon>
              <AlbumIcon />
            </ListItemIcon>
            <ListItemText primary={"Podcasts"} />
        </ListItem>

        <ListItem
            button
            onClick={() => {
              window.location = "/Donateus";
            }}
            >
            <ListItemIcon>
              <MonetizationOnIcon/>
            </ListItemIcon>
            <ListItemText primary={"Donate us"} />
        </ListItem>


        <ListItem
            button
            onClick={() => {
              window.location = "/Aboutus";
            }}
            >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary={"About Us"} />
        </ListItem>

        <ListItem
            button
            onClick={() => {
              window.location = "/Feedback";
            }}
            >
            <ListItemIcon>
              <FeedbackIcon/>
            </ListItemIcon>
            <ListItemText primary={"Feedback"} />
        </ListItem>

      </div>
      
          
       
     
      </List>
    </div> 
  );


    return (
        <div>
        <AppBar style = {{backgroundColor:"white"}}>
            <div className = "navbar">
                <div className = "navbar__logo">
                <img src = {logo} style = {{height:"50px",width:"150px", objectFit: "contain"}} onClick={() => {
                  window.location = "/";
                }}/>
                </div>
                <div className = "navbar__hamburger">
                    {['right'].map((anchor) => (
                        <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}> <MenuIcon /></Button>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                            {list(anchor)}
                        </Drawer>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </AppBar>     
        </div>
    )
}

export default Navbar
