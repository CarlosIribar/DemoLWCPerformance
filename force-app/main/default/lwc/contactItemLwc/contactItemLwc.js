import { LightningElement, api } from 'lwc';

export default class ContactItem extends LightningElement {
    @api contact;
    @api level;

    get showContact() {
        return this.contact.Level__c === this.level || this.level === 'All';
    }
}