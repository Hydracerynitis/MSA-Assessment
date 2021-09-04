import React from "react";
import { Avatar, createStyles, Divider, IconButton, makeStyles, Menu, MenuItem, Theme } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

const useStyles=makeStyles((theme: Theme) =>(
  createStyles({
    root: {
      flexGrow: 1,
    },
      menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
    avatar:{
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    }
})));

interface MenuProp{
  Name?:string,
  ImgUrl?:string
}

export const AccountMenu= ({Name,ImgUrl}:MenuProp)=> {
    const classes=useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => { setAnchorEl(event.currentTarget);};
    const handleClose = () => {setAnchorEl(null);};
    const open= Boolean(anchorEl)
    return(  
    <div>
      <IconButton edge="end" size="medium" className={classes.menuButton} color="inherit" aria-label="state" onClick={handleMenu}>
        <Avatar className={classes.avatar} alt={Name} src={ImgUrl}>{getName(Name)}</Avatar>
      </IconButton>
      <Menu anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right',}} keepMounted
        transformOrigin={{vertical: 'top',horizontal: 'right',}} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Log Out</MenuItem>
      </Menu>
    </div>)
}

function getName(Name?:string){
  if (Name===undefined || Name===""){
    return("NZ");
  }
  else{
    let array:string[]=Name.split(" ");
    if(array.length<=1){
      if(Name.length<=1){
        return(Name[0].toUpperCase())
      }
      else{
        return(Name[0].toUpperCase()+Name[1])
      }
    }
    return(array[0][0].toUpperCase()+array[array.length-1][0].toUpperCase())
  }
}
