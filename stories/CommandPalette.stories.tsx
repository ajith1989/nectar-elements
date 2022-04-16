import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CommandPalette } from '../src/components/CommandPalette';
import { CommandPaletteProps } from '../src/utils/types';

const meta: Meta = {
    title: 'Command Palette',
    component: CommandPalette,
};

export default meta;

const Template: Story<CommandPaletteProps> = args => <CommandPalette {...args} />;

export const CommandPaletteTrigger = Template.bind({});


