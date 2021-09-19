import React, { useEffect, useState } from 'react'
import { Container, createStyles, Grid, makeStyles, TextField, Theme, Typography,Button, withStyles } from '@material-ui/core'
import { DecodeEnum, EncodeEnum, stateColor, userstate } from '../Header/UserState'
import { editSelf } from '../../api/__generated__/editSelf'
import { NoMatchPage } from '../NotMatchPage/NoMatchPage'
import '../button.css';
import { EDIT_SELF} from '../../api/Mutation'
import { useMutation, useQuery } from '@apollo/client'
import { useHistory } from 'react-router'
import { SELF } from '../../api/Queries'
import { Self } from '../../api/__generated__/Self'

interface EditPageProp{
    Name:string
    ImgUrl:string
    state:userstate
}
const createStyle = makeStyles((theme: Theme) =>(
    createStyles({
        root: {
            textTransform: 'none',
            textAlign:"center",
            alignContent:"center",
            margin:"auto",
            padding:"auto",
            maxWidth:"600px"
        },
        white:{
            "& .MuiFormHelperText-root": {
                color: "white",
              },
        },
        title:{
            paddingTop:"50px",
            marginBottom:"20px"
        },
        subtitle:{
            paddingBottom:"20px"
        },
        Normal:{
            "&.MuiButton-outlined":{
                color:"#4caf50"
            },
            "&.MuiButton-contained":{
                background:"#4caf50"
            }
        },
        CloseContact:{
            "&.MuiButton-outlined":{
                color:"#ff8f00"
            },
            "&.MuiButton-contained":{
                background:"#ff8f00"
            }
        }, 
        Infected:{            
            "&.MuiButton-outlined":{
                color:"#e65100"
            },
            "&.MuiButton-contained":{
                background:"#e65100"
            }
        }
})));
const NoCapButton = withStyles((theme: Theme) => ({
    root: {
        textTransform:"none",
    },
  }))(Button);

export const EditPage=(prop:EditPageProp)=>{
    const { loading, error, data } = useQuery<Self>(SELF);
    const classes=createStyle()
    const history=useHistory()
    const login=prop.state===userstate.LOGIN
    const [submit,setsubmit]=useState(false)
    const [name,setname]=useState(prop.Name)
    const [state,setstate]=useState<userstate>(prop.state)
    const [initstate,Initstate]=useState<userstate>(prop.state)
    const [imgUrl,setimgUrl]=useState(prop.ImgUrl)
    const [hasFocus, setHasFocus] = useState(false);
    const CheckUrl=(str:string)=>{return(str.startsWith("http://") || str.startsWith("https://"))} 
    const [editSelf] = useMutation<editSelf>(EDIT_SELF)
    useEffect(() => {
        if(!loading && !error) {
            setname(data!.self.name)
            setimgUrl(data!.self.imgUrl)
            setstate(DecodeEnum(data!.self.state))
            Initstate(DecodeEnum(data!.self.state))
        }
    }, [data]);
    const handleSubmit = async () => {
        if (submit){
            return
        }
        if (name!=="" && CheckUrl(imgUrl)) {
            var backendState=EncodeEnum(state)
            console.log(name,imgUrl,backendState)
            try{
                console.log({variables: {name:name,imgUrl:imgUrl,state:backendState}})
                const {data}= await editSelf({variables: {name:name,imgUrl:imgUrl,state:backendState}})
                console.log(data)
                setsubmit(true)
                setHasFocus(false);
                setTimeout(()=>{
                    history.push("/Home")
                },3000)
            }
            catch(error){
                console.log(error)
            }
        }else{
            setHasFocus(true);
        }
    };
    if(!login){return(
    <Container className={classes.root}>
        <Grid className={classes.title}>
            <Typography variant="h4">Update your user profile here</Typography>
        </Grid>
        {submit ? (
        <Grid className={classes.subtitle}>
          <Typography variant="h6" color="textSecondary">Congratulations! Your profile has been changed successfully.</Typography>
          <Typography variant="h6" color="textSecondary">3 seconds later, you will be redirected back to Home Page.</Typography>
        </Grid>
        ) : null}
        <Grid container spacing={4}>
            <Grid container>
                <TextField id="standard-basic" label="Your User Name" fullWidth error={hasFocus && name === ""} value={name}
                    className={hasFocus && name === "" ? "" : classes.white} helperText="Invalid User Name" 
                    onChange={(e) => setname(e.target.value)} />
            </Grid>
            <Grid container>
                <TextField id="standard-basic" label="Your Image URL" fullWidth error={hasFocus && !CheckUrl(imgUrl)} value={imgUrl}
                    className={hasFocus && !CheckUrl(imgUrl) ? "" : classes.white} helperText="Invalid Image URL" 
                    onChange={(e) => setimgUrl(e.target.value)} />
            </Grid>
            <Typography variant="h6" color="textSecondary" >Your state</Typography>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <NoCapButton variant={state===userstate.NORMAL?"contained" : "outlined"}  
                    disableElevation fullWidth color={state===userstate.NORMAL?"primary" : undefined}
                    className={classes.Normal} onClick={()=>{setstate(userstate.NORMAL)}}
                    ><strong>Normal</strong></NoCapButton>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <NoCapButton variant={state===userstate.ClOSECONTACT?"contained" : "outlined"}  
                    disabled={initstate!==userstate.ClOSECONTACT} onClick={()=>{setstate(userstate.ClOSECONTACT)}}
                    disableElevation  fullWidth color={initstate===userstate.ClOSECONTACT?"primary" : undefined}
                    className={initstate===userstate.ClOSECONTACT ? classes.CloseContact : ""}><strong>Close Contact</strong></NoCapButton>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <NoCapButton variant={state===userstate.INFECTED?"contained" : "outlined"} 
                    onClick={()=>{setstate(userstate.INFECTED)}}
                    disableElevation fullWidth color={state===userstate.INFECTED?"primary" : undefined}
                    className={classes.Infected}><strong>Infected</strong></NoCapButton>
                </Grid>
            </Grid>
            <Grid container>
                <button type="button" style={{backgroundColor:stateColor(prop.state), margin:"auto", marginTop:"40px"}} onClick={handleSubmit}
                className="storybook-button storybook-button--medium storybook-button--primary">Submit</button>
            </Grid>
        </Grid>
    </Container>)}
    else{return(<NoMatchPage/>)}
}
