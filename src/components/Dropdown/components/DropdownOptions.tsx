import { forwardRef, useMemo, useState } from 'react';
import SearchInput from './SearchInput';

interface DropdownOptionsProps {
  isShow: boolean; // indicator to show the dropdown options
  onCloseDropdown: () => void; // close dropdown

  // passing Dropdown props needed for this component
  options: OptionType[];
  withSearch: boolean;
  optionStyleNone: boolean;
  selectedOptions: OptionType[];
  multiple: boolean;
  onChangeSelectedOptions: (value: OptionType[]) => void;
  renderOption?: (value: React.ReactNode | JSX.Element) => React.ReactNode | JSX.Element;
}

const DropdownOptions = forwardRef<HTMLDivElement, DropdownOptionsProps>(({ isShow, onCloseDropdown, options, withSearch, optionStyleNone, selectedOptions, multiple, onChangeSelectedOptions, renderOption }, ref) => {
  const [searchText, setSearchText] = useState<string>("");

  // filter options to shorter list when user type a keyword on search input
  const displayedOptions = useMemo(() => {
    let result = [...options];
    if (searchText !== '') {
      result = options.filter((option) => option.label.toLowerCase().includes(searchText.toLowerCase()));
    }
    return result;
  }, [searchText, options]);

  // function to indicate if an option is selected
  const isSelected = (value: string) => {
    return selectedOptions.find((opt) => opt.value === value);
  };

  const onSelectOption = (opt: OptionType) => {
    if (multiple) {
      if (!isSelected(opt.value)) {
        const result = [...selectedOptions, opt];
        onChangeSelectedOptions(result);
      }
    } else {
      onChangeSelectedOptions([opt]);
      onCloseDropdown();
    }
  };

  // function to highlight the text if user put a keyword on search input then it exist in the options
  const getHighlightedText = (text: string, highlight: string) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === highlight.toLowerCase() ? 
        <span key={i} className="bg-emerald-500">{part}</span> : 
        part
    );
  };

  // function to handle if component have custom render option
  const renderOptionComponent = (value: string) => {
    if (renderOption) {
      return renderOption(getHighlightedText(value, searchText));
    } else {
      return getHighlightedText(value, searchText);
    }
  }

  if (!isShow) {
    return null;
  }

  return (
    <div
      ref={ref}
      id="dropdown-portal-root"
      className="z-1001 absolute border border-grey-800 rounded shadow-md shadow-slate-300 bg-white w-full mt-2"
    >
      {withSearch &&
        <SearchInput searchText={searchText} onChangeSearchText={setSearchText} />
      }
      <div className="overflow-auto max-h-72">
        {displayedOptions.map((option) => (
          <div key={option.value} className={optionStyleNone ? '' : `px-3 py-2 text-sm cursor-pointer hover:bg-emerald-50 ${isSelected(option.value) && 'bg-emerald-50'}`} onClick={() => onSelectOption(option)}>
            {renderOptionComponent(option.label)}
          </div>
        ))}
      </div>
    </div>
  );
});

export default DropdownOptions;