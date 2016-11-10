define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "dijit/_TemplatedMixin",
    // "mxui/dom",
    // "dojo/dom",
    // "dojo/dom-prop",
    // "dojo/dom-geometry",
    // "dojo/dom-class",
    // "dojo/dom-style",
    // "dojo/dom-construct",
    // "dojo/_base/array",
    // "dojo/_base/lang",
    "dojo/text",
    // "dojo/html",
    // "dojo/_base/event",

    "dojo/text!MobileListView/widget/template/MobileListView.html"
],
 function (declare,
 _WidgetBase,
 _TemplatedMixin,
 // dom,
 // dojoDom,
 // dojoProp,
 // dojoGeometry,
 // dojoClass,
 // dojoStyle,
 // dojoConstruct,
 // dojoArray,
 // dojoLang,
 dojoText,
 // dojoHtml,
 // dojoEvent,
 widgetTemplate) {
    "use strict";

    return declare("MobileListView.widget.MobileListView", [ _WidgetBase, _TemplatedMixin ], {

        templateString: widgetTemplate,
        // wrapper: null,


        widgetBase: null,
        attributeName: "",
        collectionName: "",
        referenceName: "",

        // Internal variables.
        _handles: null,
        _contextObj: null,

        constructor: function () {
            this._handles = [];
        },
        //
        // postCreate: function () {
        //     logger.debug(this.id + ".postCreate");
        // },

        update: function (obj, callback) {
          var wid = this;
            // logger.debug(this.id + ".update");
            var guid = obj.getGuid().split("GUID:")[1]
            mx.data.getSlice(
              wid.collectionName,
              [
                {
                  attribute: wid.referenceName,
                  operator: "equals",
                  value: guid
                }
              ],
              {
                offset:0,
                limit:100,
                sort:[]
              },
              function(res, count){
                if (count == 0){
                  console.log('none found')
                  return
                }
                console.log(res)
                var wrapper = wid.widgetBase

                res.forEach(function(r){
                  var tempDivPanelInner = document.createElement("div")
                  ,   tempDivPanelOuter = document.createElement("div");

                  tempDivPanelInner.className = "panel-body"
                  tempDivPanelInner.innerHTML = r.jsonData.attributes[wid.attributeName].value
                  tempDivPanelOuter.className = "panel panel-default"

                  tempDivPanelOuter.appendChild(tempDivPanelInner)

                  wrapper.appendChild(tempDivPanelOuter)
                  // console.log(r) // this would be writing to the dom
                })
              },
              function(err){
                console.log('error ' + err)
              }

            )

            this._contextObj = obj;
            callback();
        },

        // resize: function (box) {
        //   logger.debug(this.id + ".resize");
        // },
        //
        // uninitialize: function () {
        //   logger.debug(this.id + ".uninitialize");
        // },
        //
        // _updateRendering: function (callback) {
        //     logger.debug(this.id + "._updateRendering");
        //
        //     if (this._contextObj !== null) {
        //         dojoStyle.set(this.domNode, "display", "block");
        //     } else {
        //         dojoStyle.set(this.domNode, "display", "none");
        //     }
        //
        //     mendix.lang.nullExec(callback);
        // }
    });
});

require(["MobileListView/widget/MobileListView"]);
