import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Thumbnail, ThumbnailProps } from '../src/components/Thumbail';

const meta: Meta = {
    title: 'Thumbnail',
    component: Thumbnail,
};

export default meta;

const Template: Story<ThumbnailProps> = args => <Thumbnail {...args} />;

export const ThumbnailWithoutImage = Template.bind({});

ThumbnailWithoutImage.args = {
    title: 'Primary',
    description: 'Description',
};

export const ThumbnailWithTag = Template.bind({});

ThumbnailWithTag.args = {
    title: 'Primary',
    description: 'Description',
    tag: 'featured'
};
