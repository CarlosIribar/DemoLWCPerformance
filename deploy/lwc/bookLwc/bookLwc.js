import { LightningElement, wire, track } from 'lwc';
import getContacts from '@salesforce/apex/ContactBookCtrl.getContacts';


export default class BookLwc extends LightningElement {
    @track contacts;
    @wire(getContacts)
    wiredContacts({ error, data }) {
        if (data) {
            this.contacts = data;
            console.log(data);
        } else if (error) {
            console.log(error);
        }
    }

}