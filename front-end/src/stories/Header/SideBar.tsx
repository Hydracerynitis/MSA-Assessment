import React from "react";
import {Divider,Link,  List,  ListItem,  ListItemIcon,  ListItemText,  makeStyles,} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import GitHubIcon from "@material-ui/icons/GitHub";
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  listText: {
    color: "black",
  },
  fullList: {
    width: "auto",
  },
});
export const SidebarLogIn = () => {
    const classes = useStyles();
    return (
      <div className={classes.list}>
        <List>
          <ListItem button href="/Home" component={Link}>
            <ListItemIcon >
              <HomeIcon />
            </ListItemIcon >
            <ListItemText className={classes.listText} primary="Home" />
          </ListItem>
          <ListItem component={Link}>
            <ListItemIcon>
              <LockOutlinedIcon />
            </ListItemIcon> 
            <ListItemText className={classes.listText} primary="Require Log In"/>
          </ListItem>
          <ListItem component={Link}>
            <ListItemIcon>
              <LockOutlinedIcon />
            </ListItemIcon> 
            <ListItemText className={classes.listText} primary="Require Log In"/>
          </ListItem> 
          <ListItem component={Link}>
            <ListItemIcon>
              <LockOutlinedIcon />
            </ListItemIcon> 
            <ListItemText className={classes.listText} primary="Require Log In"/>
          </ListItem> 
        </List>
        <Divider />
        <List>
          <ListItem button href="https://github.com/login/oauth/authorize?client_id=c45816972149add990c7" component={Link}>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
          <ListItemText className={classes.listText} primary="Log in" />
          </ListItem>
        </List>
      </div>
    );
  };

export const SidebarLogOut = () => {
  const classes = useStyles();
  return (
    <div className={classes.list}>
      <List>
        <ListItem button href="/Home" component={Link}>
          <ListItemIcon >
            <HomeIcon />
          </ListItemIcon >
          <ListItemText className={classes.listText} primary="Home" />
        </ListItem>
        <ListItem button  href="/Submit" component={Link}>
          <ListItemIcon>
            <ArrowUpwardIcon />
          </ListItemIcon> 
          <ListItemText className={classes.listText} primary="Submit Entry"/>
        </ListItem>
        <ListItem button  href="/Entry" component={Link}>
          <ListItemIcon>
            <LibraryBooksOutlinedIcon />
          </ListItemIcon> 
          <ListItemText className={classes.listText} primary="View Entry"/>
        </ListItem>
        <ListItem button  href="/Edit" component={Link}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon> 
          <ListItemText className={classes.listText} primary="Change Setting"/>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button href="/Home" component={Link} onClick={()=>{localStorage.removeItem("token")}}>
            <ListItemIcon>
                <ExitToAppOutlinedIcon />
            </ListItemIcon>
        <ListItemText className={classes.listText} primary="Log out" />
        </ListItem>
      </List>
    </div>
  );
};

