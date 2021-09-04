import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header,userstate } from './Header';

export default {
  title: 'UI Component/Header',
  component: Header,

} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args}/>;

export const LogIn = Template.bind({});
LogIn.args={
    UserState:userstate.LOGIN,
    Name:"",
    ImgUrl:""
}

export const Normal = Template.bind({});
Normal.args={
    UserState:userstate.NORMAL,
    Name:"",
    ImgUrl:""
}

export const CloseContact = Template.bind({});
CloseContact.args={
    UserState:userstate.ClOSECONTACT,
    Name:"",
    ImgUrl:""
}

export const Infected = Template.bind({});
Infected.args={
    UserState:userstate.INFECTED,
    Name:"",
    ImgUrl:""
}
