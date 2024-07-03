import { Dropdown } from './Dropdown';
import React from 'react';
import '../output.css';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'padded',
  },
};

export const Index = {
  args: {
    name: 'custom-dropdown',
    usePortal: false,
    outlined: false,
    multiple: true,
    withSearch: true,
    options: [{
      key: '1',
      value: 'Option 1'
    }, {
      key: '2',
      value: 'Option 2'
    }, {
      key: '3',
      value: 'Long option 3'
    }, {
      key: '4',
      value: 'Long long option 4'
    },{
      key: '5',
      value: 'Option 1'
    }, {
      key: '6',
      value: 'Option 2'
    }, {
      key: '7',
      value: 'Long option 3'
    }, {
      key: '8',
      value: 'Long long option 4'
    }, {
      key: '9',
      value: 'Long option 3'
    }, {
      key: '10',
      value: 'Long long option 10 Long long option 4 Long long option 4 Long long option 4 Long long option 4'
    }]
  },
};

export const CustomRenderOption = {
  args: {
    name: 'custom-dropdown',
    renderOption: (value) => <div class="text-xs font-semibold">{value}</div>,
    usePortal: false,
    outlined: false,
    multiple: true,
    withSearch: true,
    options: [{
      key: '1',
      value: 'Option 1'
    }, {
      key: '2',
      value: 'Option 2'
    }, {
      key: '3',
      value: 'Long option 3'
    }, {
      key: '4',
      value: 'Long long option 4'
    },{
      key: '5',
      value: 'Option 1'
    }, {
      key: '6',
      value: 'Option 2'
    }, {
      key: '7',
      value: 'Long option 3'
    }, {
      key: '8',
      value: 'Long long option 4'
    }, {
      key: '9',
      value: 'Long option 3'
    }, {
      key: '10',
      value: 'Long long option 4'
    }]
  },
};
