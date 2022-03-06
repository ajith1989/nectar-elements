import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Breadcrumb, BreadcrumbProps } from '../src/components/Breadcrumb';

const meta: Meta = {
    title: 'Breadcrumb',
    component: Breadcrumb,
};

export default meta;

const Template: Story<BreadcrumbProps> = args => <Breadcrumb {...args} />;

export const BreadcrumbWithItems = Template.bind({});

BreadcrumbWithItems.args = {
    items: [
        {
            "label": "Home",
            "link": "/"
        },
        {
            "label": "Link 1"
        },
        {
            "label": "Link 2",
            "link": "#"
        }
    ]
}

