# Item Editor
Items data: resources/data/itemList.js

> ***Application used only Create_React_App***

State management is via Context / Reducer hooks

**App.js**
- Includes context,
  * ItemContext
- Includes reducers,
  * ItemReducer

**Components**
* Header, includes title and buttons
* ItemList (populates from dynamic data itemList.js)
* ItemDetails (for selected item, populates the fields dynamically)
* Fields types *text*, *checkbox*, *select*
* <NOT USED> Utility Stack function to store Undo and Redo data (in this case array may be a better option in time complexity)

**Responsive**
* Base view is based of grid and templates
* Defined min-width, and overflow scroll-y when lower than that.
* Can be improved futher

**Styles**
* Styles provided as CSS
* Uses classNames, element tags, pseudo-classes, and, attributes
* Provide *active* class to selected item from the item list
* Enable or disable Undo / Redo buttons when content is not available

**Functioning**
* Header
* List hover
* List click to show details, dynamically creating fields
* Details show original values
* Details can be modified
* Maintain each state and use Undo and Redo to go to previous or next saved state

**Buttons**
* Save, working, pass items to the onSave callback
* Cancel, working, rollsback all changes, empty undo and redo lists
* Undo, working, move to previous state, undo edit or item scope, retains all previous user actions since begining or last cancel
* Redo, working, move to next state, redo rolledback edit or item scope, retains all rollbacks since begining or last cancel

**Improvements**
* refactor
* Testing
* CSS-in-JS
