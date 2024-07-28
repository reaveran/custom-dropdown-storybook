import { FC } from 'react';
import Chip from './Chip';

interface SelectedOptionsProps {
  selectedOptions: OptionType[]; // selected options
  onDelete: (value: string) => void; // delete action
  multiple: boolean;
}

const SelectedOptions: FC<SelectedOptionsProps> = ({ selectedOptions = [], onDelete, multiple }) => {
  return (
    <div className="flex flex-1 mr-1 gap-1 flex-wrap">
      {selectedOptions.length > 0 && (
        !multiple && selectedOptions.length === 1 ?
          <div className="text-sm">{selectedOptions?.[0]?.label}</div>
          : selectedOptions.map((opt) => <Chip key={opt.value} label={opt.label} onDelete={() => onDelete(opt.value)} />)
      )}
    </div>
  );
};

export default SelectedOptions;