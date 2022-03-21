import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CommandPalette, CommandPaletteProps } from '../src/components/CommandPalette';
import { Button } from '../src/components/Button';

const meta: Meta = {
    title: 'Command Palette',
    component: CommandPalette,
};

export default meta;

const Template: Story<CommandPaletteProps> = args => <CommandPalette {...args} />;

export const CommandPaletteTrigger = Template.bind({});

CommandPaletteTrigger.args = {
    children: <Button theme='primary'>Open Command Palette</Button>,
};
