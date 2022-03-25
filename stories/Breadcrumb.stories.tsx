import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Breadcrumb } from '../src/components/Breadcrumb';
import { BreadcrumbProps } from '../src/utils/types';

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

