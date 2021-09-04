import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {userstate } from '../Header/Header';
import{Footer} from './Footer';

export default {
  title: 'UI Component/Footer',
  component: Footer
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args}/>;

export const LogIn = Template.bind({});
LogIn.args={
    UserState:userstate.LOGIN,
}

export const Normal = Template.bind({});
Normal.args={
    UserState:userstate.NORMAL,
}

export const CloseContact = Template.bind({});
CloseContact.args={
    UserState:userstate.ClOSECONTACT,
}

export const Infected = Template.bind({});
Infected.args={
    UserState:userstate.INFECTED,
}