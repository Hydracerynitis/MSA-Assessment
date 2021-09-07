import React from 'react'
import { DiaryPage } from '../stories/EntryDiary/DiaryPage'
import { PageProp } from './User'

export const Diary=(input:PageProp)=>{
    return(
        <DiaryPage diary={{Entires:input.user.Entries,interests:input.interest}} state={input.user.state}/>
    )
}
