var thisCaseCondition = this.mxform._context.trackId.split("GUID:")[1]
,   newContext        = new mendix.lib.MxContext()
,   pageName          = "DLAM/Offline_ObjectiveObservations_NewEdit"
,   page              = pageName + ".page.xml";

(function(){
  mx.data.create({
    entity: "DLAM.ObjectiveObservations",
    callback: function(obj){
      console.log('created ObjectiveObservations with guid: ' + obj.getGuid())
      obj.set("DLAM.ObjectiveObservations_CaseCondition", thisCaseCondition) // set association
      // obj.set("ObservationArea", ) // set observationArea

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
