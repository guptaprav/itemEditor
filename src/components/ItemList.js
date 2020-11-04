import React, { useContext } from 'react';
import { ItemContext } from '../App';
import './ItemList.css';

const ItemList = ({ itemList }) => {
  const { item: { selectedItem }, dispatchItem } = useContext(ItemContext);

  const handleItemChange = item => {
    dispatchItem({
      type: 'SELECT_ITEM',
      payload: item
    });
  };

  return (
    <div className="aside">
      {
        itemList.map(item => (
        <div key={item.id} className={(selectedItem.id === item.id) ? 'selected' : ''} onClick={() => handleItemChange(item)}>
          <label>{item.name}</label>
        </div>
        ))
      }
    </div>
  );
};

export default ItemList;
