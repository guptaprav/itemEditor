import React, { useState, useEffect, useContext } from 'react';
import { ItemContext } from '../App';
import './ItemDetails.css';

const ItemDetails = () => {
  const { itemState, dispatch } = useContext(ItemContext);
  const { selectedItem } = itemState;
  const [currentItem, setCurrentItem] = useState(selectedItem);
  const { fields } = currentItem;
  const [currentFields, setCurrentFields] = useState(fields);
  
  useEffect(() => {
    setCurrentItem(selectedItem);
    setCurrentFields(fields);
  }, [fields,selectedItem]);

  const dispatchUpdate = (fieldItems) => {
    dispatch({
      type: 'UPDATED_ITEM',
      payload: { ...currentItem, fields: fieldItems }
    });
  };

  const handleInputChange = (evt, field) => {
    const updatedFields = fields.map(fieldItem => {
      if(fieldItem.id === field.id) {
        return { ...field, fieldValue: evt.target.value }
      }

      return fieldItem;
    });

    dispatchUpdate(updatedFields);
  };

  const handleToggleChange = (evt, field) => {
    const updatedFields = fields.map(fieldItem => {
      if(fieldItem.id === field.id) {
        return { ...field, fieldValue: evt.target.checked }
      }

      return fieldItem;
    });
    
    dispatchUpdate(updatedFields);
  };

  const handleOptionChange = (evt, field) => {
    const updatedFields = fields.map(fieldItem => {
      if(fieldItem.id === field.id) {
        return { ...field, fieldValue: evt.target.value }
      }

      return fieldItem;
    });
    
    dispatchUpdate(updatedFields);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    dispatch({
      type: 'ACTION_SAVE',
      payload: fields
    });
  };

  return (
    <div className="content">
      <form onSubmit={handleSubmit}>
      {
        currentFields.map(field => {
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
