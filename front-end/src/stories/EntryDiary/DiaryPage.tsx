import { Container, Grid, IconButton, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Entry, EntryDiary } from './EntryDiary'
import {Button} from '../Button'
import { userstate,stateColor } from '../Header/UserState'
import "./DiaryPage.css"
import { useQuery } from '@apollo/client'
import { entriesByUser } from '../../api/__generated__/entriesByUser'
import { ENTRY_USER } from '../../api/Queries'
import RefreshIcon from '@material-ui/icons/Refresh';

interface DiaryProp{
    Entires:Entry[],
    state:userstate
}
  

export const DiaryPage=(input:DiaryProp)=>{
    const{ loading, error, data, refetch}=useQuery<entriesByUser>(ENTRY_USER)
    var entries:Entry[]=[]
    if(!loading && !error){
        console.log(data)
        const Entires=data!.entriesByUser.map(x=>{return {Id:x.id,Location:x.destination.name,Address:x.destination.address,
                                                Arrive:x.dayArrive,Leave:x.dayLeave,interest: x.interest}})
        console.log(Entires)
        entries=Entires
    }
    // useEffect(()=>{

    // },[data])
    return(
        <Container className="container">
            <Grid container className="title">
                <Typography variant="h4" >Your Diary of Entries:</Typography>
                <IconButton aria-label="delete" onClick={()=>refetch()}>
                    <RefreshIcon />
                </IconButton>
            </Grid>
            {entries.length!==0 && <EntryDiary Entires={entries} state={input.state}/>}
            {entries.length===0 && 
            <Grid container direction="column" justifyContent="center" alignItems="center" className="bodyContainer">
                <Typography variant="h5" color="textSecondary" >You haven't submitted any entry of location yet.</Typography>
                <Typography variant="h5" color="textSecondary" >You can submit your first entry of location here:</Typography>
                <a href="/Submit">
                    <Button className="button" primary backgroundColor={stateColor(input.state)} size="large" label="Jump to Submit"/>
                </a>
            </Grid>}
        </Container>
    )
}