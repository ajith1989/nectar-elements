import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Upload } from '../src/components/Upload';
import { UploadProps } from '../src/utils/types';

const meta: Meta = {
    title: 'Upload',
    component: Upload,
};

export default meta;

const Template: Story<UploadProps> = args => <Upload {...args} />;

export const SingleFileUpload = Template.bind({});

SingleFileUpload.args = {
    label: 'Upload File',
    multiple: false
};

export const MultipleFileUpload = Template.bind({});

MultipleFileUpload.args = {
    label: 'Upload File',
    multiple: true
};

export const UploadOnlyImages = Template.bind({});

MultipleFileUpload.args = {
    label: 'Upload File',
    multiple: true,
    accept: "image/*"
};