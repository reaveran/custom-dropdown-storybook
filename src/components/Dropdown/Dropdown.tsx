import { FC, useEffect, useRef, useState } from 'react';
import SelectedOptions from './components/SelectedOptions';
import IconChevronDown from '../../assets/icons/IconChevronDown';
import { createPortal } from 'react-dom';
import DropdownOptions from './components/DropdownOptions';

interface DropdownProps {
  // require props
  options: OptionType[]; // option list

  // optional props
  id?: string; // element's id
  withSearch?: boolean; // display search bar for option
  outlined?: boolean; //
  multiple?: boolean; // enable multiple select
  onChange?: (selectedOptions: OptionType[]) => void; // function to return the selected option
  renderOption?: (value: React.ReactNode | JSX.Element) => React.ReactNode | JSX.Element; // function to customize option view
  label?: string; // dropdown label
  usePortal?: boolean; // enable portal
  optionStyleNone?: boolean; // clear option styling
}

const Dropdown: FC<DropdownProps> = ({ 
  options,
  id,
  withSearch = true,
  multiple = true,
  outlined = false,
  onChange,
  renderOption,
  label = "label",
  optionStyleNone = false,
  usePortal = false,
 }) => {

  const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  // ref to close the option if user click outside of these element
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

  const onDelete = (value: string) => {
    const result = selectedOptions.filter((opt) => opt.value !== value);
    setSelectedOptions(result);
    onChange && onChange(result);
  };

  const onSelectOption = (option: OptionType[]) => {
    setSelectedOptions(option);
    onChange && onChange(option);
  }

  const renderDropdownContentWithoutPortal = <DropdownOptions 
    ref={dropdownRef}
    isShow={showDropdown}
    onCloseDropdown={() => setShowDropdown(false)}
    options={options}
    withSearch={withSearch}
    optionStyleNone={optionStyleNone}
    selectedOptions={selectedOptions}
    multiple={multiple}
    onChangeSelectedOptions={onSelectOption}
    renderOption={renderOption}
  />

  const renderDropdownContentWithPortal = () => {
    return createPortal(
      renderDropdownContentWithoutPortal,
      document.body
    );
  };
  
  const renderDropdownContent = () => {
    return usePortal ? renderDropdownContentWithPortal() : renderDropdownContentWithoutPortal;
  }
  
  // hide the dropdown if click outside of the element
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
        toggleRef.current && !toggleRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);
  
  return (
    <div className="grid grid-cols-4 gap-4" id={id}>
      <div>
        {label}
      </div>
      <div className="col-span-3 relative">
        <div ref={toggleRef} onClick={() => setShowDropdown(true)} className={`border-solid border border-grey-800 rounded px-2 py-1 flex justify-between items-center ${outlined ? 'bg-slate-300' : 'bg-white'}`}>
          <SelectedOptions selectedOptions={selectedOptions} onDelete={onDelete} multiple={multiple} />
          <IconChevronDown size={16} color={"#444444"} />
        </div>
        {showDropdown && renderDropdownContent()}
      </div>
    </div>
  );
};

export default Dropdown;