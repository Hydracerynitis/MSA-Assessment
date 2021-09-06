import { Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { Diary, EntryDiary } from './EntryDiary'
import {Button} from '../Button'
import { userstate,stateColor } from '../Header/UserState'
import "./DiaryPage.css"

interface DiaryProp{
    diary:Diary,
    state:userstate
}

export const DiaryPage=(input:DiaryProp)=>{
    return(
        <Container className="container">
            <Grid container className="title" xs={12} sm={12}>
                <Typography variant="h4" >Your Diary of Entries:</Typography>
            </Grid>
            {input.diary.Entires.length!=0 && <EntryDiary Entires={input.diary.Entires} interests={input.diary.interests}/>}
            {input.diary.Entires.length===0 && 
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