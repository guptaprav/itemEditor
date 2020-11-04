import React, { useState, useEffect, useContext } from 'react';
import { ActionContext, ItemContext } from '../App';
import './ItemDetails.css';

const ItemDetails = () => {
  const dispatchAction = useContext(ActionContext);
  const { item: { selectedItem, updatedItem }, dispatchItem } = useContext(ItemContext);
  const { fields } = selectedItem;
  const { fields: updatedFields } = updatedItem || {};
  // const [fieldItems, setFieldItems] = useState(fields);
  const fieldItems = updatedFields || fields;

  useEffect(() => {
    // modify current selected item, on item change
    // if(!updatedItem) {
      // setFieldItems(fields);
    // } else {
    //   setFieldItems(updatedItem);
    // }
  }, [fields]);

  const dispatchUpdate = (fieldItems) => {
    // Dispatch to save change in changeStack
    dispatchItem({
      type: 'UPDATED_ITEM',
      payload: { ...selectedItem, fields: fieldItems }
    });
  };

  const dispatchCancel = () => {
    // Dispatch to cancel any update change in changeStack
    dispatchItem({
      type: 'CANCEL_ITEM'
    });
  };

  const handleInputChange = (evt, field) => {
    const updatedFields = fieldItems.map(fieldItem => {
      if(fieldItem.id === field.id) {
        return { ...field, fieldValue: evt.target.value }
      }

      // Undo and Redo will toggle changeStack
      return fieldItem;
    });

    // setFieldItems(updatedFields);
    dispatchUpdate(updatedFields);
  };

  const handleToggleChange = (evt, field) => {
    const updatedFields = fieldItems.map(fieldItem => {
      if(fieldItem.id === field.id) {
        return { ...field, fieldValue: evt.target.checked }
      }

      // Undo and Redo will toggle changeStack
      return fieldItem;
    });
    
    // setFieldItems(updatedFields);
    dispatchUpdate(updatedFields);
  };

  const handleOptionChange = (evt, field) => {
    const updatedFields = fieldItems.map(fieldItem => {
      if(fieldItem.id === field.id) {
        return { ...field, fieldValue: evt.target.value }
      }

      // Undo and Redo will toggle changeStack
      return fieldItem;
    });
    
    // setFieldItems(updatedFields);
    dispatchUpdate(updatedFields);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    // if(fieldItems) {
    //   dispatchCancel();

      dispatchAction({
        type: 'ACTION_SAVE',
        payload: fieldItems
      });
    // } else {
    //   return false;
    // }
  };

  console.log('updatedItem, ', updatedItem);

  return (
    <div className="content">
      <form onSubmit={handleSubmit}>
      {
        fieldItems.map(field => {
          const { id, fieldName, fieldType, fieldValue, fieldOptions } = field;
          
          switch (fieldType) {
            case 'text':
              return (
                <div key={id} className="field-container">
                  <div className="field-label">{fieldName}</div>
                  <input
                    type="text"
                    value={fieldValue}
                    onChange={(evt) => handleInputChange(evt, field)}
                  />
                </div>
              );
            case 'toggle':
              return (
                <div key={id} className="field-container">
                  <input
                    type="checkbox"
                    checked={fieldValue}
                    onChange={(evt) => handleToggleChange(evt, field)}
                  />
                  <span className="field-label">{fieldName}</span>
                </div>
              );
            case 'option':
              return (
                <div key={id} className="field-container">
                  <div className="field-label">{fieldName}</div>
                  <select
                    value={fieldValue}
                    onChange={(evt) => handleOptionChange(evt, field)}
                  >
                  {
                    fieldOptions.map(option => (
                      <option value={option.optionValue}>
                        {option.optionName}
                      </option>
                    ))
                  }
                  </select>
                </div>
              );
            default:
              return null;
          }
        })
      }
      </form>
    </div>
  );
};

export default ItemDetails;
