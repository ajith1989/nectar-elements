import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Table } from '../src/components/Table';
import { TableProps } from '../src/utils/types';

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
