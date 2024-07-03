
# Custom Dropdown

This is a custom dropdown component


## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| options | {value: string, key: string}[] | required | options for the dropdown
| id | string |  | id for the element
| name | string |  | name for the element
| withSearch | boolean | true | indicator to display search bar at the dropdown menu
| outlined | boolean | false | the style for the dropdown display
| multiple | boolean | true | indicator to allow multi select
| onChange | function |  | function when select/delete the options
| renderOption | function |  | custom render for option display
| optionLabel | string |  | label for the dropdown
| usePortal | boolean | false | set true to activate portal
| optionStyleNone | boolean |  | set true to erase default styling on option list
