import React from 'react'
import { EditPage } from '../stories/EditPage/EditPage'
import { PageProp } from './User'

export const Edit=(input:PageProp)=>{
    return(
        <EditPage Name={input.user.Name} ImgUrl={input.user.ImgUrl} state={input.user.state}/>
    )
}