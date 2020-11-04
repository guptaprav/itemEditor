import React, { useContext } from 'react';
import { ActionContext, ItemContext } from '../App';
import './Header.css';

const TITLE = 'Item Editor';

const Header = () => {
  const dispatch = useContext(ActionContext);
  const { item: { updatedItem }, dispatchItem } = useContext(ItemContext);
  
  const handleUndo = () => {
    dispatch({ type: 'ACTION_UNDO' });
  };

  const handleRedo = () => {
    dispatch({ type: 'ACTION_REDO' });
  };

  const handleSave = () => {
    if (!updatedItem)  return false;

    dispatch({
      type: 'ACTION_SAVE',
      payload: updatedItem
    });

    // remove any update state
    // handleCancel();
  };

  const handleCancel = () => {
    dispatchItem({
      type: 'CANCEL_ITEM'
    })
  };

  return (
    <div className="header">
      <div className="header-title">{TITLE}</div>
      <div className="header-actions">
        <div>
          <button type="button" onClick={handleUndo}>Undo</button>
          <button type="button" onClick={handleRedo}>Redo</button>
        </div>
        <div>
          <button type="button" onClick={handleSave}>Save</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
