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

        // Internal variables.
        _handles: null,
        _contextObj: null,

        // constructor: function () {
        //     this._handles = [];
        // },
        //
        // postCreate: function () {
        //     logger.debug(this.id + ".postCreate");
        // },

        update: function (obj, callback) {
          var wid = this;
            // logger.debug(this.id + ".update");
            var thisOfflineAHC = obj.getGuid().split("GUID:")[1]
            mx.data.getSlice(
              "DLAM.CaseCondition",
              [
                {
                  attribute: "DLAM.CaseCondition_OfflineAHC",
                  operator: "equals",
                  value: thisOfflineAHC
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
                  var tempDiv = document.createElement("div")
                  tempDiv.innerHTML = r.jsonData.attributes.ConditionName.value
                  wrapper.appendChild(tempDiv)
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
