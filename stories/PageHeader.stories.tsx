import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PageHeader } from '../src/components/PageHeader';
import { Button } from '../src/components/Button';
import { CommandPalette } from '../src/components/CommandPalette';
import { PageHeaderProps } from '../src/utils/types';
import { Globe } from 'react-feather';

const meta: Meta = {
    title: 'Page Header',
    component: PageHeader,
};

export default meta;

const Template: Story<PageHeaderProps> = args => <PageHeader {...args} />;

export const DefaultPageHeader = Template.bind({});

DefaultPageHeader.args = {
    title: 'Dashboard',
    extra: [
        <CommandPalette />,
        <Button icon={Globe}>EN</Button>
    ]
};
