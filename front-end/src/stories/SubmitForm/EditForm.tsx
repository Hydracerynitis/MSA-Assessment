import React, { useEffect, useState } from "react";
import { TextField, Typography, Grid, Container } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button } from "../Button";
import { userstate,stateColor } from "../Header/UserState";
import "./SubmitForm.css";
import { useMutation, useQuery } from "@apollo/client";
import { EDIT_ENTRY, SUBMIT_FORM } from "../../api/Mutation";
import { useHistory } from 'react-router'
import { useLocation } from "react-router-dom";
import { ENTRY } from "../../api/Queries";
import {entry} from "../../api/__generated__/entry"
import { editEntry, editEntryVariables } from "../../api/__generated__/editEntry";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .MuiFormHelperText-root": {
      color: "white",
    },
  },
}));
interface EditFormProp{
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
function extraAddresss(address:string){
  var array=address.split(", ")
  var street=array[0];
  var suburb=array[1];
  array=array[2].split(" ")
  var postcode=Number.parseInt(array[1]);
  var city=array[0];
  return {street,suburb,city,postcode}
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
function CheckLocation() {
    return new URLSearchParams(useLocation().search);
  }
export const EditForm = ({UserState}:EditFormProp) => {
    const classes = useStyles();
    const history=useHistory();
    const Id=CheckLocation().get("entry");
    const {loading, error, data,refetch}=useQuery<entry>(ENTRY,{variables:{id:Id}});
    const [Location, setLocation] = useState("");
    const [Address,setAddress] =useState("");
    const [Suburb,setSuburb] =useState("");
    const [City,setCity]=useState(" ");
    const [PostCode,setPostCode]=useState(-1);
    const defaultTime="2000-01-01T00:00"
    const [Arrive,setArrive] = useState("")
    const [Leave,setLeave] = useState('')
    const [submit, setSubmit] = useState(false);
    const [hasFocus, setHasFocus] = useState(false);
    const [TimeList,setTimeList]=useState<string[]>([]);
    const ValidInput=  Location !== "" && checkAddress(Address) && Suburb!=="" && City!=="" && PostCode!==-1 
                  && Arrive!=="" && Leave!=="" && Arrive<Leave && !TimeList.includes(Arrive)
    const Interest= UserState===userstate.INFECTED
    const [Edit]=useMutation<editEntry>(EDIT_ENTRY)
    useEffect(() => {const GetEntryMethod = () => {
        if(Id===undefined && Id===null){
          return
        }
        console.log(Id) 
        console.log(data)
        if(!loading && !error){
          setLocation(data!.entry.destination.name);
          var addressOption=extraAddresss(data!.entry.destination.address)
          setAddress(addressOption.street);
          setSuburb(addressOption.suburb);
          setCity(addressOption.city);
          setPostCode(addressOption.postcode)
          setArrive(data!.entry.dayArrive);
          setLeave(data!.entry.dayLeave);
          var List=data!.entry.appUser.entries.map(x => x.dayArrive)
          setTimeList(List.filter(x => x!==data!.entry.dayArrive))
          console.log(TimeList)
          console.log(Arrive)
          console.log(Leave)
        };}
        GetEntryMethod();
      }, [data]);
    const handleSubmit = async() => {
      console.log(TimeList,Arrive,TimeList.includes(Arrive))
        if(submit){
            return
        }
        if (ValidInput && Id!==null) {
            console.log(Location)
            var address=[Address,Suburb,City].join(", ")+" "+PostCode.toString()
            console.log(address)
            console.log(Arrive)
            console.log(Leave)
            var input:editEntryVariables={entryId:Id,name:Location,address:address,arrive:Arrive,leave:Leave,interest:Interest.toString()}
            try{
                const {data}=await Edit({variables:input})
                console.log(data)
                setSubmit(true);
                setHasFocus(false);
                setTimeout(()=>{
                    history.push("/Entry")
                },3000)
            }
            catch(e){
                console.log(e)
            }
        }else{
            setHasFocus(true);
        }
    };
    return (
    <Container className="form_container">
        <Grid className="title">
            <Typography variant="h4">Submit your entry of location here!</Typography>
        </Grid>
      {submit ? (
        <Grid className="subtitle">
          <Typography variant="h6" color="textSecondary">Congratulations! Your entry has been submitted successfully.</Typography>
          <Typography variant="h6" color="textSecondary">3 seconds later, you will be redirected back to Entry Diary.</Typography>
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
                <TextField fullWidth id="datetime-local" label="Avriving Time" type="datetime-local" value={Arrive==="" ? defaultTime:Arrive} 
                className={hasFocus && (Arrive===""|| Arrive>Leave || TimeList.includes(Arrive)) ? "" : classes.root} 
                error={hasFocus && (Arrive==="" || Arrive>Leave || TimeList.includes(Arrive))} onChange={(e)=> setArrive(e.target.value)} 
                helperText={Arrive==="" ? "Please select a time" : (TimeList.includes(Arrive)?"Arrive time conflict with other entry" :"Invalid input")}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField fullWidth id="datetime-local" label="Leaving Time" type="datetime-local" value={Leave==="" ? defaultTime: Leave}
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