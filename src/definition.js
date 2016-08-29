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
          type: "string",
          expression: "optional",
          defaultValue: ""
        },
        icon: {
          ref: "options.icon",
          label: "Icon",
          type: "string",
          expression: "optional",
          defaultValue: ""
        },
        text: {
          ref: "options.text",
          label: "Text",
          type: "string",
          expression: "optional",
          defaultValue: ""
        }
      }
    },
    addons: {
      uses: "addons"
    },
    settings: {
      uses: "settings"
    }
  }
};
