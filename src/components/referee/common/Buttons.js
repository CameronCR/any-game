import React from 'react';

export function deleteButton(condition) {
  if(condition.length > 0) {
    return <button type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>;
  }
}
