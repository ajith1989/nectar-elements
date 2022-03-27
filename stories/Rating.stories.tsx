import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Rating } from '../src/components/Rating';
import { RatingProps } from '../src/utils/types';

const meta: Meta = {
    title: 'Rating',
    component: Rating,
};

export default meta;

const Template: Story<RatingProps> = args => <Rating {...args} />;

export const TagRating = Template.bind({});

TagRating.args = {
    value: 3.25,
    type: 'tag'
};

export const ReadOnlyRating = Template.bind({});

ReadOnlyRating.args = {
    value: 2.75,
    type: 'read-only'
};

export const FullRating = Template.bind({});

FullRating.args = {
    value: 4,
    type: 'full'
};
