import React from 'react'
import { userstate } from '../stories/Header/UserState';
import {Entry} from '../stories/EntryDiary/EntryDiary';

export interface PageProp{
    user:UserInform,
    interest:string[]
}

interface UserInform{
    state:userstate,
    Name:string,
    ImgUrl:string,
    Entries:Entry[]
}