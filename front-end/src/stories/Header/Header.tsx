import React, { useState } from 'react';
import { SidebarLogIn,SidebarLogOut } from './SideBar';
import { StatePopover } from './StatePopover';
import { AccountMenu } from './AccountMenu';
import { AppBar, Toolbar, Typography,Button, IconButton, createStyles, makeStyles, Theme, Drawer, Grid} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export enum userstate{
  LOGIN="LogIn",
  NORMAL="Normal",
  ClOSECONTACT="Close Contact",
  INFECTED="Infected"
}

export interface User{
  UserState?: userstate,
  Name?:string,
  ImgUrl?:string
}

export function useStyles(state?: userstate){
  var Color: string;
  switch(state){
    case undefined:
    case userstate.LOGIN:{
      Color="#039be5";
    }
    break;
    case userstate.NORMAL:{
      Color="#4caf50"
    }
    break;
    case userstate.ClOSECONTACT:{
      Color="#ff8f00"
    }
    break;
    case userstate.INFECTED:{
      Color="#e65100"
    }
    break;
  }
  const Styles=makeStyles((theme: Theme) =>(
    createStyles({
      root: {
        flexGrow: 1,
        background: Color,
      },
      Icon:{
        marginRight: theme.spacing(1),
      },
      title: {
        flexGrow: 1,
      },
      card:{
        minWidth:250,
        maxWidth:400,
      },
      cardContect:{
        textAlign:"center",
      },
      statecolor:{
        color:Color,
      }
    })));
  return Styles()
}

export const Header=(prop:User={UserState:userstate.LOGIN,Name:"",ImgUrl:""})=> {
  const classes = useStyles(prop.UserState);
  const login= prop.UserState===userstate.LOGIN || prop.UserState===undefined
  const [sideBar, setSideBar] = useState(false);
  const toggleSideBar = () => { setSideBar(!sideBar); };
  return (
    <div className={classes.root}>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.Icon} size="medium" color="inherit" aria-label="menu" onClick={toggleSideBar}>
            <MenuIcon />
            <Drawer anchor="left" open={sideBar} onClose={toggleSideBar}>
              {login ? (<div><SidebarLogIn /></div>): (<div><SidebarLogOut /></div>)}
            </Drawer>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Covid19 Tracer APP
          </Typography>
          {login && (
            <div>
              <Button color="inherit">Login</Button>
            </div>
          )}
          {!login && (
            <div>
              <Grid container={true} alignItems="center" spacing={2}>
                <StatePopover UserState={prop.UserState}/>
                <AccountMenu Name={prop.Name} ImgUrl={prop.ImgUrl} />
              </Grid>

            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}