import React from 'react'
import { DiaryPage } from '../stories/EntryDiary/DiaryPage'
import { PageProp } from './User'

export const Diary=(input:PageProp)=>{
    return(
        <DiaryPage Entires={[]} state={input.user.state}/>
    )
}
