//add condition to current OfflineAHC
console.log(this)
var thisCondition  = this._contextObj._guid
,   thisOfflineAHC = this.mxform._context.trackId.split("GUID:")[1];
(function(){
  mx.data.create({
    entity: "DLAM.CaseCondition",
    callback: function(obj){
      obj.set("DLAM.CaseCondition_OfflineAHC", thisOfflineAHC) // set association
      obj.set("DLAM.CaseCondition_Condition", thisCondition) // set association
      mx.data.commit({
        mxobj: obj,
        callback: function(){
          console.log('record ' + thisOfflineAHC + ' updated')
        },
        error: function(err){
          console.log(err)
        }
      })
    },
    error: function(err){
      console.log(err)
    }
  })
})()
