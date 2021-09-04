import React from "react";
import { useStyles,userstate } from "./Header";
import { IconButton, Popover, Typography,Card, CardContent, Divider } from "@material-ui/core";
import NotificationImportantOutlinedIcon from '@material-ui/icons/NotificationImportantOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

interface PopoverProp{
    UserState?:userstate
}

export const StatePopover= ({UserState}:PopoverProp)=> {
    const classes=useStyles(UserState);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => { setAnchorEl(event.currentTarget);};
    const handleClose = () => {setAnchorEl(null);};
    const open= Boolean(anchorEl)
    return(  
    <div>
      <IconButton edge="end" size="medium" className={classes.Icon} color="inherit" aria-label="state" onClick={handleMenu}>
        {NoticeIcon(UserState)}
      </IconButton>
      <Popover  anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right',}} keepMounted
        transformOrigin={{vertical: 'top',horizontal: 'right',}} open={open} onClose={handleClose}>
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h6" className={classes.cardContect}>Your State is <span style={Color(UserState)}>{UserState}</span></Typography>
                <Divider />
                {UserState===userstate.NORMAL && (<div>
                    <Typography variant="subtitle1">You have not yet been to any location marked as location of interest.</Typography>
                    <Typography variant="subtitle1">Stay Healthy and Careful!</Typography>
                    <Typography variant="subtitle1">If your have taken Covid19 Test recently and its result turn out to be positvie, please change your state to "Infected" so we can tract down other cases.</Typography>
                </div>)}
                {UserState===userstate.ClOSECONTACT && (<div>
                    <Typography variant="subtitle1">You have recently been to a location marked as a location of interest.</Typography>
                    <Typography variant="subtitle1">Please take a Covid19 Test As Soon As Possible</Typography>
                    <Typography variant="subtitle1">If the test result is positive, mark yourself as "Infected". Otherwise, mark yourself as "Normal"</Typography>
                </div>)}
                {UserState===userstate.INFECTED && (<div>
                    <Typography variant="subtitle1">Hope your case will be cured as quickly as possible.</Typography>
                    <Typography variant="subtitle1">Please reporet to Health Hotline and getting medical support as soon as possible</Typography>
                    <Typography variant="subtitle1">As soon as you are cured, please mark yourself as "Normal"</Typography>
                </div>)}
            </CardContent>
        </Card>     
      </Popover>
    </div>)
}

function NoticeIcon(s?:userstate){
    if(s===undefined || s===userstate.NORMAL){
        return(<NotificationsNoneOutlinedIcon />);
    }
    else{
        return(<NotificationImportantOutlinedIcon />);
    }
}

const Color = (s?:userstate) =>{  
    switch(s){
        case undefined:
        case userstate.LOGIN:{
          return({
            color:"#039be5"
          });
        }
        case userstate.NORMAL:{
          return({
            color:"#4caf50"
          });
        }
        case userstate.ClOSECONTACT:{
          return({
              color:"#ff8f00"
          });
        }
        case userstate.INFECTED:{
          return({
            color:"#e65100"
          });
        }
    }
}