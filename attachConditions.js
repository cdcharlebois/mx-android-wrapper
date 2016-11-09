//add condition to current OfflineAHC
console.log(this)
var thisCondition  = this._contextObj._guid
,   thisOfflineAHC = this.mxform._context.trackId.split("GUID:")[1]
,   newContext     = new mendix.lib.MxContext()
,   pageName       = "DLAM/Offline_CaseCondition_NEW"
,   page           = pageName + ".page.xml";

(function(){
  mx.data.create({
    entity: "DLAM.CaseCondition",
    callback: function(obj){
      obj.set("DLAM.CaseCondition_OfflineAHC", thisOfflineAHC) // set association
      obj.set("DLAM.CaseCondition_Condition", thisCondition) // set association
      newContext.setContext(obj);
      mx.ui.openForm(page, {
          location: "content",
          context: newContext
      });
      // mx.data.commit({
      //   mxobj: obj,
      //   callback: function(){
      //     console.log('record ' + thisOfflineAHC + ' updated')
      //   },
      //   error: function(err){
      //     console.log(err)
      //   }
      // })
    },
    error: function(err){
      console.log(err)
    }
  })
})()
