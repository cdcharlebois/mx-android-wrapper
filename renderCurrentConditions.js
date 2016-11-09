
(function(){
  debugger
  var thisOfflineAHC = window._mxOfflineAHC
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
      var wrapper = document.querySelector('[name="conditionsWrapper"]')

      res.forEach(function(r){
        var tempDiv = document.createElement("div")
        tempDiv.innerHTML = r.jsonData.attributes.ConditionName
        wrapper.appendChild(tempDiv)
        // console.log(r) // this would be writing to the dom
      })
    },
    function(err){
      console.log('error ' + err)
    }

  )

})()
