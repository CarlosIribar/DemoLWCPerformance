import { LightningElement, wire, track } from 'lwc';
import getContacts from '@salesforce/apex/ContactBookCtrl.getContacts';


export default class BookLwc extends LightningElement {
    @track contacts;
    @track level;
    @wire(getContacts)
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
            console.log(data);
        } else if (error) {
            console.log(error);
        }
    }

    changeLevelHandler(event) {        
        console.log(event);
        this.level = event.detail;
    }

}