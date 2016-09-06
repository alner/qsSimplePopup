import icons from './luiIcons';

export default function setupDefinition({ getCurrentSheetObjects }) {
  return {
    type: "items",
    component: "accordion",
    items: {
      general: {
        translation: "properties.general",
        type: "items",
        items: {
          listItems: {
           type: "array",
           ref: "listItems",
           label: "Items",
           translation: "Common.CustomObjects",
           itemTitleRef: "objectDescription",
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
             objects: {
               ref: "object",
               label: "Visualization",
               translation: "Common.CustomObjects",
               type: "string",
               component: "dropdown",
               options: function() {
                   return getCurrentSheetObjects().then(data => {
                         // [Sheet, Sheet objects]
                         return [{
                           value: `${data.id}|${data.properties.qMetaDef.title}|${data.properties.qInfo.qType}`,
                           label: `${data.properties.qMetaDef.title}`
                         }].concat(
                           data.propertyTree.qChildren.map(item => {
                            return {
                              value: `${item.qProperty.qInfo.qId}|${item.qProperty.title}|${item.qProperty.visualization}`,
                              label: `${item.qProperty.title} (${item.qProperty.visualization})`
                            }
                           })
                         );
                   })
               },
               change: function(data){
                const objectParts = data.object.split("|");
                let objectId = objectParts.length > 0 && objectParts[0];
                let objectType = objectParts.length > 2 && objectParts[2];
                if(objectId) {
                  if(objectType == 'sheet')
                    data.buttonPlaceSelector = '#sheet-title'
                  else
                  if (objectType == 'filterpane')
                    data.buttonPlaceSelector = `[tid="${objectId}"] .qv-object-content-container header h1`
                  else
                    data.buttonPlaceSelector = `[tid="${objectId}"] header h1`;
                }
                else
                  data.buttonPlaceSelector = data.object;

                data.objectDescription = (objectParts.length > 1 && objectParts.slice(1).join(" : "))
                  || objectParts.join(" ");
               }
             },
             buttonPlace: {
               ref: "buttonPlaceSelector",
               label: "Place selector",
               type: "string",
               expression: "optional",
               defaultValue: "",
               change: function(data){
                 //if(!data.buttonPlaceSelector) {
                data.object = "";
                data.objectDescription = "";
                //}
               }
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
               defaultValue: false
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
};
