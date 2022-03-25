import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Hyperlink } from '../src/components/Hyperlink';
import { HyperlinkProps } from '../src/utils/types';

const meta: Meta = {
    title: 'Hyperlink',
    component: Hyperlink,
};

export default meta;

const Template: Story<HyperlinkProps> = args => <Hyperlink {...args} />;

export const HyperlinkWithIcon = Template.bind({});

HyperlinkWithIcon.args = {
    label: 'Hyperlink With Icon',
    link: '#',
    showIcon: true
};

export const HyperlinkWithoutIcon = Template.bind({});

HyperlinkWithoutIcon.args = {
    label: 'Hyperlink Without Icon',
    link: '#',
    showIcon: false
};
