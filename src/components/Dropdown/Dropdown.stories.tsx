import Dropdown from "./Dropdown";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    id: 'custom-dropdown',
    usePortal: false,
    outlined: false,
    multiple: true,
    withSearch: true,
    options: [{
      value: '1',
      label: 'Option 1'
    }, {
      value: '2',
      label: 'Option 2'
    }, {
      value: '3',
      label: 'Long option 3'
    }, {
      value: '4',
      label: 'Long long option 4'
    },{
      value: '5',
      label: 'Option 1'
    }, {
      value: '6',
      label: 'Option 2'
    }, {
      value: '7',
      label: 'Long option 3'
    }, {
      value: '8',
      label: 'Long long option 4'
    }, {
      value: '9',
      label: 'Long option 3'
    }, {
      value: '10',
      label: 'Long long option 10 Long long option 4 Long long option 4 Long long option 4 Long long option 4'
    }]
  },
};

export const CustomRenderOption = {
  args: {
    name: 'custom-dropdown',
    renderOption: (value: React.ReactNode) => <div className="text-xs font-semibold">{value}</div>,
    usePortal: false,
    outlined: false,
    multiple: true,
    withSearch: true,
    options: [{
      value: '1',
      label: 'Option 1'
    }, {
      value: '2',
      label: 'Option 2'
    }, {
      value: '3',
      label: 'Long option 3'
    }, {
      value: '4',
      label: 'Long long option 4'
    },{
      value: '5',
      label: 'Option 1'
    }, {
      value: '6',
      label: 'Option 2'
    }, {
      value: '7',
      label: 'Long option 3'
    }, {
      value: '8',
      label: 'Long long option 4'
    }, {
      value: '9',
      label: 'Long option 3'
    }, {
      value: '10',
      label: 'Long long option 4'
    }]
  },
};

