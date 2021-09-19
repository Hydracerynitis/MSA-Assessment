import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {NoMatchPage} from './NoMatchPage';

export default {
  title: 'Page/NoMatchPage',
  component: NoMatchPage,

} as ComponentMeta<typeof NoMatchPage>;

const Template: ComponentStory<typeof NoMatchPage> = (args) => <NoMatchPage />;

export const NoMatch = Template.bind({});