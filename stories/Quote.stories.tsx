import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Quote, QuoteProps } from '../src/components/Quote';

const meta: Meta = {
    title: 'Quote',
    component: Quote,
};

export default meta;

const Template: Story<QuoteProps> = args => <Quote {...args} />;

export const Gradient1 = Template.bind({});

Gradient1.args = {
    children: 'Quote With Gradient One.',
    gradient: 'gradient1',
    size: 'large'
};

export const Gradient2 = Template.bind({});

Gradient2.args = {
    children: 'Quote With Gradient Two.',
    gradient: 'gradient2',
    size: 'large'
};

export const Dark = Template.bind({});

Dark.args = {
    children: 'Quote With Dark Gradient.',
    gradient: 'dark',
    size: 'medium'
};

export const Light = Template.bind({});

Light.args = {
    children: 'Quote With Light Gradient.',
    gradient: 'light',
    size: 'small'
};
