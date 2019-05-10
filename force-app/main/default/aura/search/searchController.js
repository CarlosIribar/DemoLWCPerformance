({
	getContacts : function(component, event, helper) {
        const timeout = component.get('v.timeout');
        if (timeout) {
           clearTimeout(timeout);
        }
        const value = event.currentTarget.value;
        var newTimeout = setTimeout(function() {
            const compEvent = component.getEvent("searchBy");
            compEvent.setParams({searchTerm: value});
            compEvent.fire();
        }, 0);
        component.set('v.timeout', newTimeout);
    }
})