# Item Editor
Items data: resources/data/itemList.js

Application used only Create_React_App

State management is via Context / Reducer hooks

App.js
- Includes context,
  * ItemContext
  * ActionContext
- Includes reducers,
  * ItemReducer
  * ActionReducer

Components
* Header, includes title and buttons
* ItemList (populates from dynamic data itemList.js)
* ItemDetails (for selected item, populates the fields dynamically)
* Fields types *text*, *checkbox*, *select*
* Utility Stack function to store Undo and Redo data

Responsive
* Base view is based of grid and templates
* Defined min-width, and overflow scroll-y when lower than that.
* Can be improved futher

Styles
* Styles provided as CSS
* Uses classNames, element tags, pseudo-classes, and, attributes
* Provide *active* class to selected item from the item list

Functioning,
* Header
* List hover
* List click to show details, dynamically creating fields
* Details show original values
* Details can be modified

Buttons,
* Save, working, saves data to current object (deep copy)
* Cancel, working, rollsback all changes

TODO,
* Undo command, to use a stack datastructure (included)
* Redo command, to use a stack datastructure (included)
* Code cleanup and refactor
* Testing
* CSS-in-JS
