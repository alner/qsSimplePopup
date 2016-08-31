import icons from './luiIcons';

export default  {
  type: "items",
  component: "accordion",
  items: {
    general: {
      translation: "properties.general",
      type: "items",
      items: {
        /*
        label: {
          ref: "options.label",
          label: "Label",
          translation: "Common.Label",
          type: "string",
          expression: "optional",
          defaultValue: ""
        },
        icon: {
          ref: "options.icon",
          label: "Icon",
          type: "string",
          component: "dropdown",
          options: icons.map(icon => { return {value: icon, label: icon}}),
          defaultValue: "help"
        },
        text: {
          ref: "options.text",
          label: "Text",
          translation: "Common.Description",
          type: "string",
          expression: "optional",
          defaultValue: "See [Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)"
        },
        dialogWidth: {
           ref: "options.dialogWidth",
           label: "Dialog width",
           type: "string",
           expression: "optional",
           defaultValue: "85%"
        },
        dialogHeight: {
           ref: "options.dialogHeight",
           label: "Dialog height",
           type: "string",
           expression: "optional",
           defaultValue: "85%"
        },
        buttonPlace: {
          ref: "options.buttonPlaceSelector",
          label: "Button place selector",
          type: "string",
          expression: "optional",
          defaultValue: ""
        },
        renderPlace: {
          type: "boolean",
          component: "buttongroup",
          label: "Place as ",
          ref: "options.renderAsLastChild",
          options: [{
            value: false,
            label: "First child",
            tooltip: "First child"
          }, {
            value: true,
            label: "Last child",
            tooltip: "Last child"
          }],
          show: function(data){
            return data.options.buttonPlaceSelector;
          },
          defaultValue: true
        },
        fillCell: {
          type: "boolean",
          label: "Fill cell",
          ref: "options.fillCell",
          default: false
        },
        */
        listItems: {
         type: "array",
         ref: "listItems",
         label: "Items",
         translation: "Common.CustomObjects",
         itemTitleRef: "label",
         allowAdd: true,
         allowRemove: true,
         addTranslation: "Add Item",
         items: {
           label: {
             ref: "label",
             label: "Label",
             translation: "Common.Label",
             type: "string",
             expression: "optional",
             defaultValue: ""
           },
           icon: {
             ref: "icon",
             label: "Icon",
             type: "string",
             component: "dropdown",
             options: icons.map(icon => { return {value: icon, label: icon}}),
             defaultValue: "help"
           },
           text: {
             ref: "text",
             label: "Text",
             translation: "Common.Description",
             type: "string",
             expression: "optional",
             defaultValue: "See [Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)"
           },
           dialogWidth: {
              ref: "dialogWidth",
              label: "Dialog width",
              type: "string",
              expression: "optional",
              defaultValue: "85%"
           },
           dialogHeight: {
              ref: "dialogHeight",
              label: "Dialog height",
              type: "string",
              expression: "optional",
              defaultValue: "85%"
           },
           buttonPlace: {
             ref: "buttonPlaceSelector",
             label: "Button place selector",
             type: "string",
             expression: "optional",
             defaultValue: ""
           },
           renderPlace: {
             type: "boolean",
             component: "buttongroup",
             label: "Place as ",
             ref: "renderAsLastChild",
             options: [{
               value: false,
               label: "First child",
               tooltip: "First child"
             }, {
               value: true,
               label: "Last child",
               tooltip: "Last child"
             }],
             show: function(data){
               return data.buttonPlaceSelector;
             },
             defaultValue: true
           },
           fillCell: {
             type: "boolean",
             label: "Fill cell",
             ref: "fillCell",
             default: false
           },
         }
        },

      }
    },
    settings: {
      uses: "settings",
    }
  }
};
