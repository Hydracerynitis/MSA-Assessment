import React from 'react'
import { HomePage } from '../stories/HomePage/HomePage'
import { PageProp } from './User'

export const Home=(input:PageProp)=>{
    return(
        <HomePage Name={input.user.Name} state={input.user.state}/>
    )
}