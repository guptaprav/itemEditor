import React, { useReducer, createContext } from 'react';
import Header from './components/Header';
import ItemList from './components/ItemList';
import ItemDetails from './components/ItemDetails';
import { firstItem, initialState, itemReducer } from './reducers/itemReducer';
import './App.css';

export const ItemContext = createContext(null);

const App = () => {
  const [itemState, dispatch] = useReducer(itemReducer, { ...initialState, selectedItem: firstItem });
  
  return (
    <ItemContext.Provider value={{ itemState, dispatch }}>
      <div className="container">
        <Header />
        <ItemList />
        <ItemDetails />
      </div>
    </ItemContext.Provider>
  );
}

export default App;
