var theWidget = wid
,   theDiv    = this
,   ctx       = new mendix.lib.MxContext();

(function(){
    if (theWidget._contextObj.jsonData.objectType === 'DLAM.OfflineAHC') {
      // show the CaseCondition
      // get the CaseCondition GUID from the div
      var caseConditionGuid = theDiv.dataset.mxGuid
      // fetch the object
      mx.data.get({
        guid: caseConditionGuid,
        callback: function(obj){
          ctx.setContext(obj)
          mx.ui.openForm("DLAM/Offline_CaseCondition_NEW.page.xml",{
            location : "content",
            context  : ctx
          })
        },
        error: function(err){
          console.log(err)
        }
      })
    }
    else if (theWidget._contextObj.jsonData.objectType === 'DLAM.CaseCondition'){
      // show the ObjectiveObservations
      var objectiveObservationsGuid = theDiv.dataset.mxGuid
      // fetch the object
      mx.data.get({
        guid: objectiveObservationsGuid,
        callback: function(obj){
          ctx.setContext(obj)
          mx.ui.openForm("DLAM/Offline_ObjectiveObservations_NewEdit.page.xml",{
            location : "content",
            context  : ctx
          })
        },
        error: function(err){
          console.log(err)
        }
      })
    }
})()
