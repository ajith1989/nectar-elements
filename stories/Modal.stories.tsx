import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal } from '../src/components/Modal';
import { ModalProps } from '../src/utils/types';
import { Button } from '../src/components/Button';

const meta: Meta = {
    title: 'Modal',
    component: Modal,
};

export default meta;

const Template: Story<ModalProps> = args => <Modal {...args} />;

export const ModalTrigger = Template.bind({});

ModalTrigger.args = {
    children: <Button theme='primary'>Open Modal</Button>,
    content: <div>Modal Content</div>,
    title: 'New Modal',
};

export const ModalExtra = Template.bind({});

ModalExtra.args = {
    children: <Button theme='primary'>Open Modal</Button>,
    content: <div>Modal Content</div>,
    title: 'New Modal',
    extra: <Button>Save</Button>
};
