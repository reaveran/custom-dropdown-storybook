import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import '../output.css';
import IconChevronDown from '../icons/IconChevronDown';
import IconSearch from '../icons/IconSearch';
import IconCloseCircle from '../icons/IconCloseCircle';
import { Chip } from './components/Chip';

export const Dropdown = ({
  name,
  options,
  id,
  withSearch = true,
  multiple = true,
  outlined = false,
  onChange,
  renderOption,
  optionLabel = "label",
  optionStyleNone = false,
  usePortal = false,
}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchText, setSearchText] = useState("");
  const dropdownRef = useRef();

  const onDelete = (key) => {
    const result = selectedItems.filter((item) => item.key !== key);
    setSelectedItems(result);
    onChange && onChange(result);
  };

  const onChangeSearchText = (event) => {
    setSearchText(event.target.value);
  };

  const isSelected = (key) => {
    return selectedItems.find((item) => item.key === key);
  };

  const onSelectOption = (option) => {
    if (multiple) {
      if (!isSelected(option.key)) {
        const result = [...selectedItems, option];
        setSelectedItems(result);
        onChange && onChange(result);
      }
    } else {
      setSelectedItems([option]);
      onChange && onChange([option]);
      setShowDropdown(false);
    }
  };

  const getHighlightedText = (text, highlight) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === highlight.toLowerCase() ? 
        <span key={i} class="bg-emerald-500">{part}</span> : 
        part
    );
  };

  const renderSelectedOption = () => {
    if (multiple) {
      return selectedItems.map((item) => <Chip key={item.key} value={item.value} onDelete={() => onDelete(item.key)} />)
    } else {
      return <div class="text-sm">{selectedItems?.[0]?.value}</div>
    }
  };

  const renderOptionComponent = (value) => {
    if (renderOption) {
      return renderOption(getHighlightedText(value, searchText));
    } else {
      return getHighlightedText(value, searchText);
    }
  }

  const displayedOptions = useMemo(() => {
    let result = [...options];
    if (searchText !== '') {
      result = options.filter((option) => option.value.toLowerCase().includes(searchText.toLowerCase()));
    }
    return result;
  }, [searchText, options]);

  const renderDropdownContentWithoutPortal = () => {
    return (
      <div ref={dropdownRef} id="dropdown-portal-root" class="z-1001 absolute border border-grey-800 rounded shadow-md shadow-slate-300 bg-white w-full mt-2">
        {withSearch &&
          <div class="border-b border-grey-800 p-2 flex items-center">
            <IconSearch size={16} color={"#444"} />
            <input class="w-full ml-2 outline-none text-sm pr-5" value={searchText} onChange={onChangeSearchText}/>
            {searchText !== '' && 
              <div class="absolute right-2" onClick={() => setSearchText("")}>
                <IconCloseCircle size={16} color={"#777"} />
              </div>
            }
          </div>
        }
        <div class="overflow-auto max-h-72">
          {displayedOptions.map((option) => (
            <div key={option.key} class={optionStyleNone ? '' : `px-3 py-2 text-sm cursor-pointer hover:bg-emerald-50 ${isSelected(option.key) && 'bg-emerald-50'}`} onClick={() => onSelectOption(option)}>{renderOptionComponent(option.value)}</div>
          ))}
        </div>
      </div>
    )
  }

  const renderDropdownContentWithPortal = () => {
    return createPortal(
      renderDropdownContentWithoutPortal(),
      document.body
    );
  };

  const renderDropdownContent = () => {
    return usePortal ? renderDropdownContentWithPortal() : renderDropdownContentWithoutPortal();
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDropdown && !dropdownRef?.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div class="grid grid-cols-4 gap-4" name={name} id={id}>
      <div>
        {optionLabel}
      </div>
      <div class="col-span-3 relative">
        <div onClick={() => setShowDropdown(true)} class={`border-solid border border-grey-800 rounded px-2 py-1 flex justify-between items-center ${outlined ? 'bg-slate-300' : 'bg-white'}`}>
          <div class="flex flex-1 mr-1 gap-1 flex-wrap">
            {renderSelectedOption()}
          </div>
          <IconChevronDown size={16} color={"#444"} />
        </div>
        {showDropdown && renderDropdownContent()}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.objectOf({ key: PropTypes.string, value: PropTypes.string })).isRequired,
  id: PropTypes.string,
  withSearch: PropTypes.bool,
  outlined: PropTypes.bool,
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
  renderOption: PropTypes.func,
  optionLabel: PropTypes.string,
  usePortal: PropTypes.bool,
  optionStyleNone: PropTypes.bool,
}