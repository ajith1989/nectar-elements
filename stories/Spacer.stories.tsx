import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Spacer } from '../src/components/Spacer';
import { SpacerProps } from '../src/utils/types';

const meta: Meta = {
    title: 'Spacer',
    component: Spacer,
};

export default meta;

const Template: Story<SpacerProps> = args => <Spacer {...args} />;

export const LargeSpacer = Template.bind({});

LargeSpacer.args = {
    size: 'large'
};

export const MediumSpacer = Template.bind({});

MediumSpacer.args = {
    size: 'medium'
};


export const SmallSpacer = Template.bind({});

SmallSpacer.args = {
    size: 'small'
};
