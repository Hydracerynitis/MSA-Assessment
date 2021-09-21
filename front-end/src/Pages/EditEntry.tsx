import React from 'react'
import { EditForm } from '../stories/SubmitForm/EditForm'
import { PageProp } from './User'

export const EditEntry=(input:PageProp)=>{
    return(
        <EditForm UserState={input.user.state}/>
    )
}