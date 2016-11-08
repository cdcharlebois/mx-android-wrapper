(function(){
  var sel = "input[name='BarCode']"
  ,   page = "DLAM/OfflineAHC_NewEdit"
  ,   barcode = document.querySelector(sel).value
  // var barcode = "90210" // get from somewhere in the dom -- success
  // var barcode = "999" // get from somewhere in the dom -- fail
  ,   mxscope = this
  ,   offlinePage = page + ".page.xml"

  mx.data.getSlice("DLAM.CageCard", [
    {
      attribute: "card_id",
      operator: "equals",
      value: barcode
    }
  ],
  {
    offset:0,
    limit:1,
    sort: []
  }, // limit/offset/sort
  function(res, count){
    // if the record exists...
    if (count > 0){
      var thisRecord = res[0]
      ,   newContext = new mendix.lib.MxContext()
      ,   cardGuid   = thisRecord.getGuid();
      mx.data.create({
        entity: "DLAM.OfflineAHC",
        callback: function(obj){
          obj.set("DLAM.OfflineAHC_CageCard", cardGuid)
          newContext.setContext(obj)
          mx.ui.openForm(offlinePage, {
              location: "content",
              context: newContext
          });
        },
        error: function(err){
          console.log(err)
        }
      })
    }
    else {}
  },
  function(err){
    console.log(err)
  }
)

})()
