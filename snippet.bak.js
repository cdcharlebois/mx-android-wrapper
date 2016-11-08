mx.data.create({
    entity: "DLAM.AHC",
    callback: function(obj) {
        console.log("Object created on server");
		var newContext = new mendix.lib.MxContext();
        newContext.setContext(obj);
		mx.ui.openForm("DLAM/Offline_AHC_NEW.page.xml", {
		    location: "content",
			context: newContext
		});
    },
    error: function(e) {
        console.log("an error occured: " + e);
    }
}, this);
