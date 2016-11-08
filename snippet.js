(function(){
  var sel = "input[name='BarCode']"
  ,   page = "DLAM/OfflineAHC_NewEdit"
  ,   barcode = document.querySelector(sel).value
  // var barcode = "90210" // get from somewhere in the dom -- success
  // var barcode = "999" // get from somewhere in the dom -- fail
  ,   offlinePage = page + ".page.xml"

  // query the sqlite db to see if there's a matching record
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
  }, // limit/offset/sort (for some reason this is required)
  function(res, count){
    // if the record exists...
    if (count === 1){
      var thisRecord = res[0]
      ,   newContext = new mendix.lib.MxContext()
      ,   cardGuid   = thisRecord.getGuid();

      // create a new OfflineAHC, and tie it to the existing CageCard
      mx.data.create({
        entity: "DLAM.OfflineAHC",
        callback: function(obj){
          console.log('created OfflineAHC with guid: ' + obj.getGuid())
          obj.set("DLAM.OfflineAHC_CageCard", cardGuid) // set association
          newContext.setContext(obj)
          // then, navigate to the new page, with the new OfflineAHC as context
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
