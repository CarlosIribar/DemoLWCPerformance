public class ContactBookCtrl {
    
    @RemoteAction
	@AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        return [SELECT id, name, Level__c, Email, Phone  FROM Contact];
    }
    
    @RemoteAction
    @AuraEnabled(cacheable=true) 
    public static List<Contact> getContactsLike( String searchTerm) {
        String likeCondition = '%' + searchTerm + '%';
        return [SELECT id, name, Level__c, Email, Phone FROM Contact WHERE name LIKE :likeCondition ];
    }
}