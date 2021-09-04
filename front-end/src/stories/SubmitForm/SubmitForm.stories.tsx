import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {SubmitForm} from './SubmitForm';
import { userstate } from '../Header/UserState';

export default {
  title: 'UI Component/SubmitForm',
  component: SubmitForm,

} as ComponentMeta<typeof SubmitForm>;

const Template: ComponentStory<typeof SubmitForm> = (args) => <SubmitForm {...args}/>;

export const Normal = Template.bind({});
Normal.args={
    UserState:userstate.NORMAL
}

export const CloseContact = Template.bind({});
CloseContact.args={
    UserState:userstate.ClOSECONTACT,
}

export const Infected = Template.bind({});
Infected.args={
    UserState:userstate.INFECTED,
}
