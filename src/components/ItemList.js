import React, { useState, useEffect, useContext } from 'react';
import { ItemContext } from '../App';
import './ItemList.css';

const ItemList = () => {
  const {  itemState, dispatch } = useContext(ItemContext);
  const { items, selectedItem } = itemState;
  const [currentItems, setCurrentItems] = useState(items);
  const [currentItem, setCurrentItem] = useState(selectedItem);
 
  useEffect(() => {
    setCurrentItems(items);
    setCurrentItem(selectedItem);
  }, [items,selectedItem]);

  const handleItemChange = item => {
    dispatch({
      type: 'SELECT_ITEM',
      payload: item
    });
  };

  return (
    <div className="aside">
      {
        currentItems.map(item => (
        <div key={item.id} className={(currentItem.id === item.id) ? 'selected' : ''} onClick={() => handleItemChange(item)}>
          <label>{item.name}</label>
        </div>
        ))
      }
    </div>
  );
};

export default ItemList;
