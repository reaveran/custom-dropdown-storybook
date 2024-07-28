import { FC } from 'react';
import IconCloseCircle from '../../../assets/icons/IconCloseCircle';
import IconSearch from '../../../assets/icons/IconSearch';

interface SearchInputProps {
  searchText: string; // searched text
  onChangeSearchText: (value: string) => void; // onchange text action
}

const SearchInput: FC<SearchInputProps> = ({ searchText, onChangeSearchText }) => {

  return (
    <div className="border-b border-grey-800 p-2 flex items-center">
      <IconSearch size={16} color={"#444"} />
      <input className="w-full ml-2 outline-none text-sm pr-5" value={searchText} onChange={(e) => onChangeSearchText(e.target.value)}/>
      {searchText !== '' && 
        <div className="absolute right-2" onClick={() => onChangeSearchText("")}>
          <IconCloseCircle size={16} color={"#777"} />
        </div>
      }
    </div>
  );
};

export default SearchInput;