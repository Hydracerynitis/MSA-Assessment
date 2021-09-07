import React, { useState } from "react";
import { TextField, Typography, Grid, Container } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "../Button";
import { userstate,stateColor } from "../Header/UserState";
import "./SubmitForm.css";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .MuiFormHelperText-root": {
      color: "white",
    },
  },
}));
export interface SubmitFormOut {
    
}

interface SubmitFormProp{
    UserState?:userstate
}

const NZCity=[
    {value:" ",label:"Select City"},
    {value:"Auckland",label:"Auckland"},
    {value:"ChristChurch",label:"ChristChurch"},
    {value:"Wellington",label:"Wellington"},
    {value:"Hamilton",label:"Hamilton"},
    {value:"Tauranga",label:"Tauranga"},
    {value:"Palmerston North",label:"Palmerston North"},
    {value:"Napier",label:"Napier"},
    {value:"Invercargill",label:"Invercargill"},
    {value:"Nelson",label:"Nelson"},
    {value:"Upper Hutt",label:"Upper Hutt"},
]
function refillw0(n:number,length:number){
    var str=n.toString()
    if (str.length<length){
        for (let i = 0; i < length-str.length; i++) {
            str="0"+str;
        }
    }
    return str
}

function checkAddress(a:string){
    var components=a.trim().split(" ")
    if(components.length<2){
        return false
    }
    if(components[0].split("/").length>1){
        var array=components[0].split("/")
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (isNaN(Number(element))) {
                return false;
            }       
        }
    }else if(isNaN(Number(components[0])) ){
        return false
    }
    var array=components.slice(1, components.length)
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (!isNaN(Number(element))) {
            return false;
        }       
    }
    return true
}

export const SubmitForm = ({UserState}:SubmitFormProp) => {
    const classes = useStyles();
    const [Location, setLocation] = useState<string>("");
    const [Address,setAddress] =useState("");
    const [Suburb,setSuburb] =useState("");
    const [City,setCity]=useState(" ");
    const [PostCode,setPostCode]=useState(-1);
    const localTime=new Date();
    const defaultTime=localTime.getFullYear().toString()+"-"+refillw0(localTime.getMonth()+1,2)+"-"+refillw0(localTime.getDate(),2)
                        +"T"+refillw0(localTime.getHours(),2)+":"+refillw0(localTime.getMinutes(),2)
    const [Arrive,setArrive] = useState("")
    const [Leave,setLeave] = useState('')
    const [submit, setSubmit] = useState(false);
    const [hasFocus, setHasFocus] = useState(false);
    const ValidInput=  Location !== "" && checkAddress(Address) && Suburb!="" && City!="" && PostCode!=-1 && Arrive!="" && Leave!="" && Arrive<Leave
    const handleSubmit = async() => {
        setSubmit(false);
        if (ValidInput) {
            console.log(Location)
            console.log([Address,Suburb,City].join(", ")+" "+PostCode.toString())
            console.log(Arrive)
            console.log(Leave)
            setSubmit(true);
            setHasFocus(false);
        }else{
            console.log(Arrive)
            console.log(Leave)
            setHasFocus(true);
        }
    };
    return (
    <Container className="form_container">
        <Grid className="title">
            <Typography variant="h4">Submit your entry of location here!</Typography>
        </Grid>
      {submit ? (
        <Grid className="title">
          <Typography variant="h6" color="textSecondary">Congratulations! Your entry has been submitted successfully.</Typography>
        </Grid>
      ) : null}
      <Grid container spacing={4}>
        <Grid container xs={12} sm={12}>
          <TextField id="standard-basic" label="Location Name" fullWidth error={hasFocus && Location === ""} value={Location}
            className={hasFocus && Location === "" ? "" : classes.root} helperText="Invalid Location Name" 
            onChange={(e) => setLocation(e.target.value)} />
        </Grid>
        <Grid container xs={12} sm={12}>
          <TextField id="standard-basic" label="Location Address" fullWidth error={hasFocus && !checkAddress(Address)} value={Address}
            className={hasFocus && !checkAddress(Address) ? "" : classes.root} helperText="Invalid Address Name" 
            onChange={(e) => setAddress(e.target.value)} />
        </Grid>
        <Grid container xs={12} sm={12}>
            <Grid item xs={12} sm={4}>
                <TextField id="standard-basic" label="Location Suburb" fullWidth error={hasFocus && Suburb === ""} value={Suburb}
                className={hasFocus && Suburb === "" ? "" : classes.root} helperText="Invalid Suburb Name" 
                onChange={(e) => setSuburb(e.target.value)} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField id="standard-select-currency-native" select label="Location City" fullWidth error={hasFocus && City === " "} value={City}
                className={hasFocus && City === " " ? "" : classes.root} helperText="Invalid City Name" SelectProps={{native: true,}}
                onChange={(e) => setCity(e.target.value)} >
                    {NZCity.map((option) => (<option key={option.value} value={option.value}>{option.label}</option>))}
                </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField id="standard-basic" label="Location Post Code" fullWidth error={hasFocus && PostCode === -1} value={PostCode===-1? "" : PostCode}
                className={hasFocus && PostCode === -1 ? "" : classes.root} helperText="Invalid Post Code Name" 
                onChange={(e) => !isNaN(Number(e.target.value)) ? setPostCode(Number(e.target.value)) : undefined}  />
            </Grid>
        </Grid>
        <Grid container xs={12} spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
                <TextField fullWidth id="datetime-local" label="Avriving Time" type="datetime-local" defaultValue={defaultTime} 
                className={hasFocus && (Arrive===""|| Arrive>Leave) ? "" : classes.root} error={hasFocus && (Arrive==="" || Arrive>Leave)} 
                onChange={(e)=> setArrive(e.target.value)} helperText={Arrive==="" ? "Please select a time" : "Invalid input"}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField fullWidth id="datetime-local" label="Leaving Time" type="datetime-local" defaultValue={defaultTime} 
                className={hasFocus && (Leave==="" || Arrive>Leave) ? "" : classes.root} error={hasFocus && (Leave===""|| Arrive>Leave)} 
                onChange={(e)=> setLeave(e.target.value)} helperText={Leave==="" ? "Please select a time" : "Invalid input"} />          
            </Grid>
        </Grid> 
      </Grid>       
      <Grid container={true} >
      <Button className="form_button" backgroundColor={stateColor(UserState)} label="Submit" 
        onClick={handleSubmit} primary size="medium" />
      </Grid>
    </Container>
  );
};