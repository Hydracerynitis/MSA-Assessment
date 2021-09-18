import React, { useState } from 'react'
import { Container, createStyles, makeStyles, Theme, Typography } from '@material-ui/core'
import { Redirect } from 'react-router-dom'

const createStyle = makeStyles((theme: Theme) =>(
    createStyles({
        root: {
            textAlign:"center",
            alignContent:"center",
            margin:"auto",
            padding:"auto"
        },
        title:{
            paddingTop:"50px",
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


export const NoMatchPage=()=>{
    const classes=createStyle()
    const [second, Setsecond]=useState(5)
    const CountDown=()=>{Setsecond(second-1);}
    const timer=()=>{setInterval(CountDown,1000)}
    timer()
    return(       
        <Container className={classes.root}>
            {second<=0 && <Redirect to="/Home"/>}
            <Typography variant="h3" className={classes.title}>Page Not Found</Typography>
            <Typography variant="h4" className={classes.body}>We can't find the page you seem to look for</Typography>
            <Typography variant="h4"className={classes.body}>You will be redirected back to Home page after {second.toString()} seconds</Typography>
            <a href="/Home">
                <Typography variant="h4" className={classes.button}>Click this link to immediately return to Home page</Typography>
            </a>
        </Container>)
    }

