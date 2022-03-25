import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Layout } from '../src/components/Layout';
import { Menu } from '../src/components/Menu';
import { Home, LogOut, Settings } from 'react-feather';
import { LayoutProps } from '../src/utils/types';


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
    appIcon: 'n.',
    children: <div>Dashboard Layout</div>,
    layoutMenuComponent: <Menu type="vertical-collapsed" items={[
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
    ]} />,
    contextMenuComponent: null

};
