import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Home, LogOut, Settings } from 'react-feather';
import { Menu } from '../src/components/Menu';
import { Button } from '../src/components/Button';
import { MenuProps } from '../src/utils/types';


const meta: Meta = {
    title: 'Menu',
    component: Menu,
};

export default meta;

const Template: Story<MenuProps> = args => <Menu {...args} />;

export const CollapsedMenu = Template.bind({});

CollapsedMenu.args = {
    type: 'vertical-collapsed',
    items: [
        {
            link: '/home',
            active: true,
            icon: Home
        },
        {
            link: '/settings',
            active: false,
            icon: Settings
        },
        {
            link: '/logout',
            active: false,
            icon: LogOut
        }
    ]
};

export const ExpandedMenu = Template.bind({});

ExpandedMenu.args = {
    type: 'vertical-expanded',
    items: [
        {
            link: '/home',
            active: true,
            label: 'Home'
        },
        {
            link: '/settings',
            active: false,
            label: 'Settings'
        },
        {
            link: '/logout',
            active: false,
            label: 'LogOut'
        }
    ],
    action: <Button theme='primary'>Action</Button>,
};
