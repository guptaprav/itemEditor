export const itemList = [
  {
    id: 1,
    name: 'ABC',
    title: 'Abc Items',
    onSave: () => { console.log('Save for ', this.name) },
    fields: [
      {
        id: 'field1',
        fieldName: 'Field 1',
        fieldType: 'text',
        fieldValue: 'It is ABC text field 1'
      },
      {
        id: 'field2',
        fieldName: 'Field 2',
        fieldType: 'toggle',
        fieldValue: true
      },
      {
        id: 'field3',
        fieldName: 'Field 3',
        fieldType: 'option',
        fieldValue: 3,
        fieldOptions: [
          { optionName: 'Option 1', optionValue: 0 },
          { optionName: 'Option 2', optionValue: 1 },
          { optionName: 'Option 3', optionValue: 2 },
          { optionName: 'Option 4', optionValue: 3 }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'DEF',
    title: 'Def Items',
    onSave: () => { console.log('Save for ', this.name) },
    fields: [
      {
        id: 'field1',
        fieldName: 'Field 1',
        fieldType: 'toggle',
        fieldValue: false
      },
      {
        id: 'field2',
        fieldName: 'Field 2',
        fieldType: 'text',
        fieldValue: 'It is DEF text field 1'
      },
      {
        id: 'field3',
        fieldName: 'Field 3',
        fieldType: 'option',
        fieldValue: 2,
        fieldOptions: [
          { optionName: 'Option 1', optionValue: 0 },
          { optionName: 'Option 2', optionValue: 1 },
          { optionName: 'Option 3', optionValue: 2 },
          { optionName: 'Option 4', optionValue: 3 }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'GHI',
    title: 'Ghi Items',
    onSave: () => { console.log('Save for ', this.name) },
    fields: [
      {
        id: 'field1',
        fieldName: 'Field 1',
        fieldType: 'option',
        fieldValue: 1,
        fieldOptions: [
          { optionName: 'Option 1', optionValue: 0 },
          { optionName: 'Option 2', optionValue: 1 },
          { optionName: 'Option 3', optionValue: 2 },
          { optionName: 'Option 4', optionValue: 3 }
        ]
      },
      {
        id: 'field2',
        fieldName: 'Field 2',
        fieldType: 'toggle',
        fieldValue: false
      },
      {
        id: 'field3',
        fieldName: 'Field 3',
        fieldType: 'text',
        fieldValue: 'It is GHI text field 1'
      }
    ]
  },

]