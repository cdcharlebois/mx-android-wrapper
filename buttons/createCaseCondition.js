//add condition to current OfflineAHC
// console.log(this)
var thisOfflineAHC = this.mxform._context.trackId.split("GUID:")[1]
,   newContext     = new mendix.lib.MxContext()
,   pageName       = "DLAM/Offline_CaseCondition_NEW"
,   page           = pageName + ".page.xml";

(function(){
  mx.data.create({
    entity: "DLAM.CaseCondition",
    callback: function(obj){
      console.log('created CaseCondition with guid: ' + obj.getGuid())
      obj.set("DLAM.CaseCondition_OfflineAHC", thisOfflineAHC) // set association
      // mx.data.commit({
      //    mxobj: obj,
      //    callback:function(){
      //      //do something
      //      console.log('committed obj: ' + obj.getGuid())
      //    },
      //    error: function(err){
      //      console.log(err)
      //    }
      // });
      console.log(obj)
      newContext.setContext(obj);
      mx.ui.openForm(page, {
          location: "content",
          context: newContext
      });
    },
    error: function(err){
      console.log(err)
    }
  })
})()
