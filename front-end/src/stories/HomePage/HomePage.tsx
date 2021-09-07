import React from 'react'
import { Container, createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import { userstate } from '../Header/UserState'
import { Color } from '../Header/StatePopover'
import { Button } from '../Button'
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';

interface HomePageProp{
    Name:string
    state:userstate
}
const createStyle = makeStyles((theme: Theme) =>(
    createStyles({
        root: {
            textAlign:"center",
            alignContent:"center",
            margin:"auto",
            padding:"auto"
        },
        title:{
            paddingBottom:"50px"
        },
        optionLow:{
            paddingTop:"30px",
            paddingBottom:"15px"
        },
        optionHigh:{
            paddingTop:"15px",
            paddingBottom:"30px"
        },
        body:{
            paddingTop:"10px",
            paddingBottom:"10px"
        },
        button:{
            paddingTop:"30px",
            paddingBottom:"30px"            
        }
})));


export const HomePage=(prop:HomePageProp)=>{
    const classes=createStyle()
    const login=prop.state===userstate.LOGIN
    if(!login){return(
    <Container className={classes.root}>
        <Typography variant="h3" className={classes.title}>Welcomback! {prop.Name===undefined || prop.Name.trim()==="" ? "New Zealanders": prop.Name}.</Typography>
        <Typography variant="h4">Your current state is <span style={Color(prop.state)}>{prop.state}</span>.</Typography>
        <Typography variant="h4">You can spend some of your time:</Typography>
        <a href="/Submit">
            <Typography variant="h5" color="textSecondary" className={classes.optionLow}><span><ArrowUpwardIcon fontSize="large"/></span>Submitting your recent Entry of a location</Typography>
        </a>
        <a href="/Diary">
            <Typography variant="h5" color="textSecondary" className={classes.optionHigh}><span><LibraryBooksOutlinedIcon fontSize="large"/></span>Submitting your recent Entry of a location</Typography>
        </a>
        <Typography variant="h4">Stay Safe and Be Kind.</Typography>
    </Container>)}
    else{return(
    <Container className={classes.root}>
        <Typography variant="h4" className={classes.title}>Keep Track with Your Entries to Push Back the Outbreak.</Typography>
        <Typography variant="h5"className={classes.body}>This is a contact tracer app that uers manually submit their entries of locations.</Typography>
        <Typography variant="h5"className={classes.body}>Location of interest will be marked automatically as a case is reported.</Typography>
        <Typography variant="h5"className={classes.body}>Users have been to a Location of interested will be marked as close contact</Typography>
        <Typography variant="h5" className={classes.button}>Now, you can use Github authentation to join as a new user.</Typography>
        <a href="">
            <Button primary backgroundColor="#039be5" label="Login" size="large"/>
        </a>
    </Container>)
    }
}
