({
	setSecondary : function(component, event, helper) {
		helper.fireSetLevel(component, 'Secondary');
	},
  setPrimary : function(component, event, helper) {
		helper.fireSetLevel(component, 'Primary');
	},
  setTertiary : function(component, event, helper) {
		helper.fireSetLevel(component, 'Tertiary');
	},
	setAll : function(component, event, helper) {
		helper.fireSetLevel(component, 'All');
	}
})