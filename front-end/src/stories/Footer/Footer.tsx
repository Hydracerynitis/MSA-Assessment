import { createStyles, Grid, IconButton, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { userstate,stateColor } from "../Header/UserState";
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


export function useStyles(state?: userstate){
    var Color=stateColor(state);
    const Styles=makeStyles((theme: Theme) =>(
      createStyles({
        root: {
            position: "fixed",
            bottom: 0,
            width: "100%",
            height: 45,
            textAlign: "center",
            fontSize: "20px",
            background: Color,
            color: "white",
          },
          menuButton: {
            marginRight: theme.spacing(2),
          },
          title: {
            flexGrow: 1,
          },
      })));
    return Styles()
}
interface FooterProp{
    UserState?:userstate
}

export const Footer = ({UserState}:FooterProp) => {
    const classes = useStyles(UserState);
  
    return (
      <footer className={classes.root}>
        <Grid container={true} alignItems="center" justifyContent="space-evenly">
          <Typography variant="h6" >MSA 2021 Phase 2 Assement By Kejun Dai</Typography>
          <Grid item={true} alignItems="center" >
              <IconButton href="https://www.facebook.com/kejun.dai.3/" size="medium">
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/kejun-dai-902335212/?locale=en_US" size="medium">
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://github.com/Hydracerynitis" size="medium">
                <GitHubIcon />
              </IconButton>
          </Grid>
        </Grid>
      </footer>
    );
};