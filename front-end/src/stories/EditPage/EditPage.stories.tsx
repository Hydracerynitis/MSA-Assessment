import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {EditPage} from './EditPage';
import { userstate } from '../Header/UserState';

export default {
  title: 'Page/EditPage',
  component: EditPage,

} as ComponentMeta<typeof EditPage>;

const Template: ComponentStory<typeof EditPage> = (args) => <EditPage {...args}/>;

export const Normal = Template.bind({});
Normal.args={
    Name:"",
    ImgUrl:"",
    state:userstate.NORMAL
}

export const CloseContact = Template.bind({});
CloseContact.args={
    Name:"",
    ImgUrl:"",
    state:userstate.ClOSECONTACT,
}

export const Infected = Template.bind({});
Infected.args={
    Name:"",
    ImgUrl:"",
    state:userstate.INFECTED,
}
