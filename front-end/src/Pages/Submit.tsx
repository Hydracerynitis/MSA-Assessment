import React from 'react'
import { SubmitForm } from '../stories/SubmitForm/SubmitForm'
import { PageProp } from './User'

export const Submit=(input:PageProp)=>{
    return(
        <SubmitForm UserState={input.user.state}/>
    )
}