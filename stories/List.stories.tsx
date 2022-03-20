import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Home } from 'react-feather';
import { List, ListProps } from '../src/components/List';

const meta: Meta = {
    title: 'List',
    component: List,
};

export default meta;

const Template: Story<ListProps> = args => <List {...args} />;

export const SimpleList = Template.bind({});

SimpleList.args = {
    title: 'This is a simple List',
    tag: 'Tag',
    tagTheme: 'success',
    theme: 'primary',
    icon: Home,
    layout: 'full'
};

export const FullList = Template.bind({});

FullList.args = {
    title: 'Water Leakage for AC',
    subTitle: 'MAN-90834980538',
    description: '5 mins ago',
    tag: 'Open',
    tagTheme: 'danger',
    footer: 'Inspection',
    theme: 'primary',
    icon: Home,
    layout: 'full'
};

export const CompactList = Template.bind({});

CompactList.args = {
    title: 'Weekly Maintenance',
    subTitle: 'MIS-3908345094',
    description: '5 days ago',
    tag: 'Closed',
    tagTheme: 'success',
    footer: 'Maintenance',
    theme: 'primary',
    icon: Home,
    layout: 'compact'
};

export const CompactListWithoutFooter = Template.bind({});

CompactListWithoutFooter.args = {
    title: 'List Title Goes Here',
    subTitle: 'INS-9408947859',
    description: '2 mins Ago',
    tag: 'Assigned',
    tagTheme: 'warning',
    theme: 'primary',
    icon: Home,
    layout: 'compact'
};

export const ThumbnaillList = Template.bind({});

ThumbnaillList.args = {
    title: 'Water Leakage for AC',
    subTitle: 'MAN-90834980538',
    description: '5 mins ago',
    tag: 'Open',
    tagTheme: 'danger',
    theme: 'primary',
    icon: Home,
    layout: 'thumbnail'
};
