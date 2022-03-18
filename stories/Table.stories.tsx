import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Table, TableProps } from '../src/components/Table';

const meta: Meta = {
    title: 'Table',
    component: Table,
};

export default meta;

const Template: Story<TableProps> = args => <Table {...args} />;

export const SimpleTable = Template.bind({});

SimpleTable.args = {
    headers: ['Name', 'Status', 'Time'],
    data: [
        ['The Sliding Mr. Bones', 'Malcolm Lockyer', '1961'],
        ['Witchy Woman', 'The Eagles', '1972'],
        ['Shining Star', 'Earth, Wind, and Fire', '1975']
    ]
};
