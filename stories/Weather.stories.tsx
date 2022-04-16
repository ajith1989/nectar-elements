import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Weather } from '../src/components/Weather';
import { WeatherProps } from '../src/utils/types';


const meta: Meta = {
    title: 'Weather',
    component: Weather,
};

export default meta;

const Template: Story<WeatherProps> = args => <Weather {...args} />;

export const Sunny = Template.bind({});

Sunny.args = {
    temperature: 28,
    condition: 'sunny',
    location: 'DXB'
};
