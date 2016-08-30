export default  {
  type: "items",
  component: "accordion",
  items: {
    general: {
      translation: "properties.general",
      type: "items",
      items: {
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
          expression: "optional",
          defaultValue: "help"
        },
        text: {
          ref: "options.text",
          label: "Text",
          translation: "Common.Description",
          type: "string",
          expression: "optional",
          defaultValue: "See [Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)"
        }
      }
    },
    settings: {
      uses: "settings",
      items: {
         additionalOptions: {
           type: "items",
           label: "Options",
           translation: "properties.presentation",
           items: {
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
               defaultValue: true
              }
           }
         }
       }
    }
  }
};
