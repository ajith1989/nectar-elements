import React from 'react';
import { User } from 'react-feather';
import { Meta, Story } from '@storybook/react';
import { Timeline } from '../src/components/Timeline';
import { TimelineProps } from '../src/utils/types';

const meta: Meta = {
    title: 'Timeline',
    component: Timeline,
};

export default meta;

const Template: Story<TimelineProps> = args => <Timeline {...args} />;

export const DefaultTimeline = Template.bind({});

DefaultTimeline.args = {
    items: [
        {
            time: '22-Aug',
            title: 'Service Request Created',
            description: 'Service request was created by customer'
        },
        {
            time: '24-Aug',
            title: 'Service Request Created',
            description: 'Service request was created by customer'
        }
    ],
};
