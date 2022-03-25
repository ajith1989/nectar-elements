import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tooltip } from '../src/components/Tooltip';
import { Button } from '../src/components/Button';
import { TooltipProps } from '../src/utils/types';

const meta: Meta = {
    title: 'Tooltip',
    component: Tooltip,
};

export default meta;

const Template: Story<TooltipProps> = args => <Tooltip {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: <Button theme='primary'>Show Tooltip</Button>,
    message: 'This is a sample tooltip',
};


