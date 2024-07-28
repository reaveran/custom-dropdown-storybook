import { FC } from 'react';
import IconClose from '../../../assets/icons/IconClose';

interface ChipProps {
  label: string; // displayed string
  onDelete?: () => void; // delete action
}

const Chip: FC<ChipProps> = ({ label, onDelete }) => {

  const handleDelete = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    onDelete && onDelete();
  }
  return (
    <div className="flex items-center bg-slate-100 rounded-xl pl-2 pr-1 py-1">
      <div className="text-xs">{label}</div>
      {onDelete && <div className="px-1 cursor-pointer" onClick={handleDelete}><IconClose size={12} /></div>}
    </div>
  );
};

export default Chip;