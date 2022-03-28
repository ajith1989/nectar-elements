import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Loader } from '../src/components/Loader';
import { LoaderProps } from '../src/utils/types';

const meta: Meta = {
    title: 'Loader',
    component: Loader,
};

export default meta;

const Template: Story<LoaderProps> = args => <Loader {...args} />;

export const PageLoader = Template.bind({});

PageLoader.args = {
    message: 'Extracting Sweetness of Things',
};
