import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {DiaryPage} from './DiaryPage';
import { userstate } from '../Header/UserState';

export default {
  title: 'Page/Diary',
  component: DiaryPage,

} as ComponentMeta<typeof DiaryPage>;

const Template: ComponentStory<typeof DiaryPage> = (args) => <DiaryPage {...args}/>;

export const test1 = Template.bind({});
test1.args={
    diary:{
        Entires:[{Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
        Arrive:"2021-8-22T11:00",Leave:"2021-8-22T11:30"}],
        interests:[]
    },
    state:userstate.NORMAL
}
export const test2 = Template.bind({});
test2.args={
    diary:{
        Entires:[],
        interests:[]
    },
    state:userstate.NORMAL
}
export const test3 = Template.bind({});
test3.args={
    diary:{
        Entires:[],
        interests:[]
    },
    state:userstate.ClOSECONTACT
}
export const test4 = Template.bind({});
test4.args={
    diary:{
        Entires:[],
        interests:[]
    },
    state:userstate.INFECTED
}
export const test5 = Template.bind({});
test5.args={
    diary:{
        Entires:[{Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
        Arrive:"2021-08-22T11:00",Leave:"2021-08-22T11:30"},
        {Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
        Arrive:"2021-08-26T08:15",Leave:"2021-08-26T08:45"},
        {Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
        Arrive:"2021-08-22T07:59",Leave:"2021-08-22T08:30"},
        {Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
        Arrive:"2021-08-26T07:59",Leave:"2021-08-26T08:30"},
        {Location:"The Met Apartments",Address:"11 Durham Street East, Auckland Central, Auckland 1010", 
        Arrive:"2021-08-23T14:00",Leave:"2021-08-23T16:00"},
        {Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
        Arrive:"2021-08-21T11:01",Leave:"2021-08-22T11:30"},
        {Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
        Arrive:"2021-08-26T08:16",Leave:"2021-08-26T08:45"},
        {Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
        Arrive:"2021-08-25T07:58",Leave:"2021-08-22T08:30"},
        {Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
        Arrive:"2021-08-26T07:49",Leave:"2021-08-26T08:30"},
        {Location:"The Met Apartments",Address:"11 Durham Street East, Auckland Central, Auckland 1010", 
        Arrive:"2021-08-28T14:02",Leave:"2021-08-23T16:00"},
        {Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
        Arrive:"2021-08-27T11:12",Leave:"2021-08-22T11:30"},
        {Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
        Arrive:"2021-08-26T08:17",Leave:"2021-08-26T08:45"},
        {Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
        Arrive:"2021-08-22T07:57",Leave:"2021-08-22T08:30"},
        {Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
        Arrive:"2021-08-26T07:39",Leave:"2021-08-26T08:30"},
        {Location:"The Met Apartments",Address:"11 Durham Street East, Auckland Central, Auckland 1010", 
        Arrive:"2021-08-23T14:03",Leave:"2021-08-23T16:00"},
        {Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
        Arrive:"2021-08-22T11:56",Leave:"2021-08-22T11:30"},
        {Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
        Arrive:"2021-08-26T08:18",Leave:"2021-08-26T08:45"},
        {Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
        Arrive:"2021-08-22T07:29",Leave:"2021-08-22T08:30"},
        {Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
        Arrive:"2021-08-26T07:16",Leave:"2021-08-26T08:30"},
        {Location:"The Met Apartments",Address:"11 Durham Street East, Auckland Central, Auckland 1010", 
        Arrive:"2021-08-23T15:34",Leave:"2021-08-23T16:00"},],
        interests:["The Met Apartments"]
    },
    state:userstate.NORMAL
}