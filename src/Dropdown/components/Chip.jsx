import React from 'react';
import PropTypes from 'prop-types';
import IconClose from '../../icons/IconClose';

export const Chip = ({
  value,
  onDelete
}) => {

  return (
    <div class="flex items-center bg-slate-100 rounded-xl pl-2 pr-1 py-1">
      <div class="text-xs">{value}</div>
      <div class="px-1 cursor-pointer" onClick={onDelete}><IconClose size={12} /></div>
    </div>
  );
};

Chip.propTypes = {
  value: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
}