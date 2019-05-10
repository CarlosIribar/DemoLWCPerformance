({
	filterContactsFromBackend : function(component, searchTerm) {
		const action = component.get("c.getContactsLike");
        action.setParams({searchTerm: searchTerm})
        action.setCallback(this, function(response) {
            const state = response.getState();
            if (state === "SUCCESS") {
                const contacts = response.getReturnValue()
                console.log(contacts);
                component.set('v.contactsToShow', contacts);
			}
        });
        $A.enqueueAction(action);
	},
})