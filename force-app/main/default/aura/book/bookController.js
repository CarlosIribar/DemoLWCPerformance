({
	doInit : function(component, event, helper) {
		const action = component.get("c.getContacts");
        action.setCallback(this, function(response) {
            const state = response.getState();
            if (state === "SUCCESS") {
                const contacts = response.getReturnValue()
                console.log(contacts);
                component.set('v.contacts', contacts);
                component.set('v.contactsToShow', contacts);
			}
        });
        $A.enqueueAction(action);
	},
    setLevelAction : function(component, event, helper) {
        const level = event.getParam('level');
        if (level) {
          component.set('v.filterLevel', level);
		}
    },
    filterBy : function(component, event, helper) {
        const searchTerm = event.getParam('searchTerm');
        const contacts = component.get('v.contacts');
        if (searchTerm) {

            console.log(searchTerm);
            const contactsToShow = contacts.filter(function(contact){
                return contact.Name.toUpperCase().includes(searchTerm.toUpperCase());
            })
            component.set('v.contactsToShow', contactsToShow);
            //helper.filterContactsFromBackend(component, searchTerm);
        } else {
          component.set('v.contactsToShow', contacts);
        }
    }
})