import React, { useEffect, useContext } from 'react';
import { ItemContext } from '../App';
import './Header.css';

const Header = () => {
  const { itemState: { title, items, undoList, redoList, onSave }, dispatch } = useContext(ItemContext);
  
  const handleUndo = () => {
    dispatch({
      type: 'ACTION_UNDO'
    });
  };

  const handleRedo = () => {
    dispatch({
      type: 'ACTION_REDO'
    });
  };

  const handleSave = (callback) => {
    // handle Save with callback
    // onSave callback
    callback(items);
    // dispatch({
    //   type: 'ACTION_SAVE'
    // });
  };

  const handleCancel = () => {
    dispatch({
      type: 'ACTION_CANCEL'
    })
  };

  return (
    <div className="header">
      <div className="header-title">{title}</div>
      <div className="header-actions">
        <div>
          <button type="button" disabled={!undoList.length} onClick={handleUndo}>Undo</button>
          <button type="button" disabled={!redoList.length} onClick={handleRedo}>Redo</button>
        </div>
        <div>
          <button type="button" onClick={() => handleSave(onSave)}>Save</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
