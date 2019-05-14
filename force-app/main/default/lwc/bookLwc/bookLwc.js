import { LightningElement, wire, track } from 'lwc';
import getContacts from '@salesforce/apex/ContactBookCtrl.getContacts';


export default class BookLwc extends LightningElement {
    contacts;  // {# v.contacts}
    @track contactsToShow; //{! v.contacts}
    @track level;

    connectedCallback() {
        this.contactsToShow = this.contacts;
        this.level = 'All';
    }

    get getTotal() {
        return this.contactsToShow ? this.contactsToShow.length : 0;
    }
    
    @wire(getContacts)
    wiredContacts({ error, data }) {
        if (data) {
            this.contactsToShow = this.contacts = data;
            console.log(data);
        } else if (error) {
            console.log(error);
        }
    }

    changeLevelHandler(event) {        
        this.level = event.detail;
    }

    searchByHandler(event) {
        const searchTerm = event.detail;
        
        if (searchTerm) {
            this.contactsToShow = this.contacts.filter(function(contact){
              return contact.Name.toUpperCase().includes(searchTerm.toUpperCase());
            })
        } else {
            this.contactsToShow = this.contacts;
        }
    }

}