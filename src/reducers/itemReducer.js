import { itemList } from '../resources/data/itemList';

export const [firstItem, ...rest] = itemList;
export const initialState = {
  title: 'Item Editor',
  onSave: (items) => { console.log('onSave callback with ', items)},
  items: itemList,
  selectedItem: firstItem,
  undoList: [],
  redoList: []
};

export const itemReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SELECT_ITEM':
      const { undoList: undoListSelect } = state;
      const stateAtSelect = { ...state };

      return {
        ...state,
        selectedItem: payload,
        undoList: [...undoListSelect, stateAtSelect]
      };
    case 'UPDATED_ITEM':
      const { items, undoList: undoListUpdate } = state;
      const stateAtUpdate = { ...state };
      
      const savedItems = items.map(item => {
        if (item.id === payload.id) {
          return payload;
        }
        
        return item;
      });

      return {
        ...state,
        selectedItem: payload,
        items: savedItems,
        undoList: [...undoListUpdate, stateAtUpdate]
      };
    case 'ACTION_SAVE':

      return {
        ...state
      };
    case 'ACTION_CANCEL':
      const { undoList: undoAtCancel } = state;

      if (!undoAtCancel.length) return state;

      const [newOriginalState, ...rest] = undoAtCancel;

      return {
        ...newOriginalState,
        undoList: [],
        redoList: []
      };
    case 'ACTION_UNDO':
      let { undoList: undo, redoList = [] } = state;
      const hasUndo = undo.length > 0;

      if (!hasUndo) return { ...state };

      const undoPop = undo.pop();
      const newUndoState = { ...undoPop };
      
      redoList = [...redoList, undoPop];

      return {
        ...newUndoState,
        undoList: [...undo],
        redoList
      };
    case 'ACTION_REDO':
      let { undoList = [], redoList: redo } = state;
      const hasRedo = redo.length > 0;

      if (!hasRedo) return { ...state };

      const redoPop = redo.pop();
      const newRedoState = { ...redoPop };
      
      undoList = [...undoList, redoPop];

      return {
        ...newRedoState,
        undoList,
        redoList: [...redo]
      };
    default:
      return state;
  }
}