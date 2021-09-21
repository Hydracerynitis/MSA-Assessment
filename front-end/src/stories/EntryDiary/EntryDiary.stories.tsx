import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EntryDiary} from './EntryDiary';

export default {
  title: 'UI Component/EntryDiary',
  component: EntryDiary,

} as ComponentMeta<typeof EntryDiary>;

const Template: ComponentStory<typeof EntryDiary> = (args) => <EntryDiary {...args}/>;

export const test1 = Template.bind({});
test1.args={
    Entires:[{Id:"1",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
            Arrive:"2021-8-22T11:00",Leave:"2021-8-22T11:30",interest:false}]
}
export const test2 = Template.bind({});
test2.args={
    Entires:[{Id:"1",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-22T11:00",Leave:"2021-08-22T11:30",interest:true},
    {Id:"2",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-26T08:15",Leave:"2021-08-26T08:45",interest:true},
    {Id:"3",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-22T07:59",Leave:"2021-08-22T08:30",interest:true},
    {Id:"4",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-26T07:59",Leave:"2021-08-26T08:30",interest:true}]
}
export const test3 = Template.bind({});
test3.args={
    Entires:[{Id:"1",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-22T11:00",Leave:"2021-08-22T11:30",interest:false},
    {Id:"2",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-26T08:15",Leave:"2021-08-26T08:45",interest:false},
    {Id:"3",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-22T07:59",Leave:"2021-08-22T08:30",interest:false},
    {Id:"4",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-26T07:59",Leave:"2021-08-26T08:30",interest:false}]
}
export const test4 = Template.bind({});
test4.args={
    Entires:[{Id:"1",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-22T11:00",Leave:"2021-08-22T11:30",interest:false},
    {Id:"2",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-26T08:15",Leave:"2021-08-26T08:45",interest:false},
    {Id:"3",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-22T07:59",Leave:"2021-08-22T08:30",interest:false},
    {Id:"4",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-26T07:59",Leave:"2021-08-26T08:30",interest:false},
    {Id:"5",Location:"The Met Apartments",Address:"11 Durham Street East, Auckland Central, Auckland 1010", 
    Arrive:"2021-08-23T14:00",Leave:"2021-08-23T16:00",interest:true},
    {Id:"6",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-21T11:01",Leave:"2021-08-22T11:30",interest:false},
    {Id:"7",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-26T08:16",Leave:"2021-08-26T08:45",interest:false},
    {Id:"8",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-25T07:58",Leave:"2021-08-22T08:30",interest:false},
    {Id:"9",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-26T07:49",Leave:"2021-08-26T08:30",interest:false},
    {Id:"10",Location:"The Met Apartments",Address:"11 Durham Street East, Auckland Central, Auckland 1010", 
    Arrive:"2021-08-28T14:02",Leave:"2021-08-23T16:00",interest:true},
    {Id:"11",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-27T11:12",Leave:"2021-08-22T11:30",interest:false},
    {Id:"12",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-26T08:17",Leave:"2021-08-26T08:45",interest:false},
    {Id:"13",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-22T07:57",Leave:"2021-08-22T08:30",interest:false},
    {Id:"14",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-26T07:39",Leave:"2021-08-26T08:30",interest:false},
    {Id:"15",Location:"The Met Apartments",Address:"11 Durham Street East, Auckland Central, Auckland 1010", 
    Arrive:"2021-08-23T14:03",Leave:"2021-08-23T16:00",interest:true},
    {Id:"16",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-22T11:56",Leave:"2021-08-22T11:30",interest:false},
    {Id:"17",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-26T08:18",Leave:"2021-08-26T08:45",interest:false},
    {Id:"18",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-22T07:29",Leave:"2021-08-22T08:30",interest:false},
    {Id:"19",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-26T07:16",Leave:"2021-08-26T08:30",interest:false},
    {Id:"20",Location:"The Met Apartments",Address:"11 Durham Street East, Auckland Central, Auckland 1010", 
    Arrive:"2021-08-23T15:34",Leave:"2021-08-23T16:00",interest:true},]
}
export const test5 = Template.bind({});
test5.args={
    Entires:[{Id:"1",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-22T11:00",Leave:"2021-08-22T11:30",interest:false},
    {Id:"2",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-26T08:15",Leave:"2021-08-26T08:45",interest:false},
    {Id:"3",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-22T07:59",Leave:"2021-08-22T08:30",interest:false},
    {Id:"4",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-26T07:59",Leave:"2021-08-26T08:30",interest:false},
    {Id:"5",Location:"The Met Apartments",Address:"11 Durham Street East, Auckland Central, Auckland 1010", 
    Arrive:"2021-08-23T14:00",Leave:"2021-08-23T16:00",interest:true},
    {Id:"6",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-22T11:00",Leave:"2021-08-22T11:30",interest:false},
    {Id:"7",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-26T08:15",Leave:"2021-08-26T08:45",interest:false},
    {Id:"8",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-22T07:59",Leave:"2021-08-22T08:30",interest:false},
    {Id:"9",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-26T07:59",Leave:"2021-08-26T08:30",interest:false},
    {Id:"10",Location:"The Met Apartments",Address:"11 Durham Street East, Auckland Central, Auckland 1010", 
    Arrive:"2021-08-23T14:00",Leave:"2021-08-23T16:00",interest:true},
    {Id:"11",Location:"Pak'nSave Westgate",Address:"17/19 Fred Taylor Drive, Westgate, Auckland 0814", 
    Arrive:"2021-08-22T11:00",Leave:"2021-08-22T11:30",interest:false},
    {Id:"12",Location:"The Met Apartments",Address:"11 Durham Street East, Auckland Central, Auckland 1010", 
    Arrive:"2021-08-23T15:00",Leave:"2021-08-23T16:00",interest:false},]
}