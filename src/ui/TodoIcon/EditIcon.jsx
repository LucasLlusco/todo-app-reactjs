import React from 'react';
import TodoIcon from './TodoIcon';

const EditIcon = ({ onEdit }) => {
  return (
    <TodoIcon
      type="edit"
      onClick={onEdit}
    />
  );
}

export default EditIcon