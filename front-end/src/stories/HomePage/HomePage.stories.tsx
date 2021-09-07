import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {HomePage} from './HomePage';
import { userstate } from '../Header/UserState';

export default {
  title: 'Page/HomePage',
  component: HomePage,

} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage {...args}/>;

export const Login = Template.bind({});
Login.args={
    Name:"",
    state:userstate.LOGIN
}

export const Normal = Template.bind({});
Normal.args={
    Name:"",
    state:userstate.NORMAL
}

export const CloseContact = Template.bind({});
CloseContact.args={
    Name:"",
    state:userstate.ClOSECONTACT,
}

export const Infected = Template.bind({});
Infected.args={
    Name:"",
    state:userstate.INFECTED,
}
