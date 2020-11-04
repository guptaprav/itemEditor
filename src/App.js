import React, { useState, useReducer, createContext } from 'react';
import Header from './components/Header';
import ItemList from './components/ItemList';
import ItemDetails from './components/ItemDetails';
import './App.css';
import { itemList } from './resources/data/itemList';

export const ActionContext = createContext(null);
export const ItemContext = createContext(null);

const [firstItem, ...rest] = itemList;
const initialItem = { selectedItem: firstItem };

const itemReducer = (state = initialItem, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SELECT_ITEM':
      return { ...state, selectedItem: payload };
    case 'UPDATED_ITEM':
      console.log('UPDATED_ITEM ', payload);
      
      return { ...state, updatedItem: payload };
    case 'CANCEL_ITEM':
      console.log('CANCEL_ITEM ');

      return { ...state, updatedItem: null };
    default:
      return state;
  }
};

const actionReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ACTION_SAVE':
      const { items } = state;
      const savedItems = items.map(item => {
        if (item.id === payload.id) {
          return payload;
        }
        
        return item;
      });

      return {
        ...state, items: savedItems
      };
    case 'ACTION_CANCEL':
      return {
        ...state,
        undoList: [],
        redoList: [],
        updatedFields: null,
        currentItem: null
      };
    case 'ACTION_UNDO':
      // Check if undo stack exists
      // create new with item, if it does not exist
      // update and add into redo stack
      // remove from undo stack
      break;
    case 'ACTION_REDO':
      // Check if redo stack exists
      // create new with item, if it does not exist
      // update and add into redo stack
      // remove from redo stack
      break;
    default:
      return state;
  }
}

const App = () => {
  const [item, dispatchItem] = useReducer(itemReducer, { selectedItem: itemList[0] });
  const [appState, dispatchAction] = useReducer(actionReducer, { items: itemList });
  
  return (
    <ActionContext.Provider value={dispatchAction}>
    <ItemContext.Provider value={{ item, dispatchItem }}>
      <div className="container">
        <Header />
        <ItemList itemList={appState.items} />
        <ItemDetails />
      </div>
    </ItemContext.Provider>
    </ActionContext.Provider>
  );
}

export default App;
