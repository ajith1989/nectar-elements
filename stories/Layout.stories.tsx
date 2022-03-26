import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Layout } from '../src/components/Layout';
import { Home, LogOut, Settings } from 'react-feather';
import { LayoutProps } from '../src/utils/types';
import { Button } from '../src/components/Button';


const meta: Meta = {
    title: 'Layout',
    component: Layout,
};

export default meta;

const Template: Story<LayoutProps> = args => <Layout {...args} />;

export const AuthLayout = Template.bind({});

AuthLayout.args = {
    type: 'auth',
    title: 'Nectar',
    children: <div>Auth Layout</div>
};

export const DashboardLayout = Template.bind({});

DashboardLayout.args = {
    type: 'dashboard',
    userName: 'Riyas Hameed',
    icon: 'n.',
    children: <div>Dashboard Layout</div>,
    action: <Button>Action</Button>,
    menuItems: [
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
    ],
    contextItems: [
        {
            label: 'Home',
            active: true
        },
        {
            label: 'Settings',
            active: false
        },
        {
            label: 'Profile',
            active: false
        }
    ],
    footerTitle: 'nectar.',
    footerDescription: 'Extracting Sweetness of Things'
};

export const DashboardLayoutWithoutContext = Template.bind({});

DashboardLayoutWithoutContext.args = {
    type: 'dashboard',
    userName: 'Riyas Hameed',
    icon: 'n.',
    children: <div>Dashboard Layout</div>,
    menuItems: [
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
    ],
    contextItems: [
        {
            label: 'Home',
            active: true
        },
        {
            label: 'Settings',
            active: false
        },
        {
            label: 'Profile',
            active: false
        }
    ],
    showContext: false
};



export const DashboardLayoutWithoutToggle = Template.bind({});

DashboardLayoutWithoutToggle.args = {
    type: 'dashboard',
    userName: 'Riyas Hameed',
    icon: 'n.',
    children: <div>Dashboard Layout</div>,
    menuItems: [
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
    ],
    contextItems: [
        {
            label: 'Home',
            active: true
        },
        {
            label: 'Settings',
            active: false
        },
        {
            label: 'Profile',
            active: false
        }
    ],
    showContext: false,
    disableContextSwitch: true
};