import React from 'react';

export function deleteButton(condition, onClick) {
  if(condition.length > 0) {
    return <button type="button" className="btn btn-danger" onClick={onClick} data-dismiss="modal">Delete</button>;
  }
}
