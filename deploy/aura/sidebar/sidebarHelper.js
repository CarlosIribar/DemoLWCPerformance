({
	fireSetLevel : function(component, level) {
		const compEvent = component.getEvent("setLevel");
        compEvent.setParams({level: level});
        compEvent.fire();
	}
})