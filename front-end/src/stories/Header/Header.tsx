import React, { useEffect, useState } from 'react';
import { SidebarLogIn,SidebarLogOut } from './SideBar';
import { StatePopover } from './StatePopover';
import { AccountMenu } from './AccountMenu';
import { AppBar, Toolbar, Typography,Button, IconButton, createStyles, makeStyles, Theme, Drawer, Grid} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {userstate, stateColor} from './UserState';
import { useHistory, useLocation } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../api/Mutation';
import {login} from '../../api/__generated__/login';

export interface User{
  UserState?: userstate,
  Name?:string,
  ImgUrl?:string
}

export function useStyles(state?: userstate){
  var Color: string=stateColor(state);
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

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const Header=(prop:User={UserState:userstate.LOGIN,Name:"",ImgUrl:""})=> {
  const classes = useStyles(prop.UserState);
  const login= prop.UserState===userstate.LOGIN || prop.UserState===undefined
  const [sideBar, setSideBar] = useState(false);
  const toggleSideBar = () => { setSideBar(!sideBar); };
  const history=useHistory();
  const query = useQuery();
  const [Login]=useMutation<login>(LOGIN);
  useEffect(() => {const loginMethod = async () => {
    const code = query.get("code");
      if (code != null) {
        try {
          const { data } = await Login({ variables: { code } });
          if (data != null && data!=undefined) {
            localStorage.setItem("token", data.login.jwt)
          }
        } catch (e) {
          console.log(e);
        }
        history.push('/Home');
        window.location.reload()
      }
    };
    loginMethod();
  }, []);
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
              <Button color="inherit" href="https://github.com/login/oauth/authorize?client_id=c45816972149add990c7">Use GitHub to Login</Button>
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