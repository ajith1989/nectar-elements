import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Thumbnail } from '../src/components/Thumbail';
import { ThumbnailProps } from '../src/utils/types';

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

export const ThumbnailWithLink = Template.bind({});

ThumbnailWithLink.args = {
    title: 'Primary',
    description: 'Description',
    tag: 'featured',
    link: '/'
};
