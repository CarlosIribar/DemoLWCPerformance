import { LightningElement } from 'lwc';

export default class SearchLwc extends LightningElement {
    timeout;

    getContacts(event) {
        if (this.timeout) {
           clearTimeout(this.timeout);
        }
        const value = event.currentTarget.value;
        this.timeout = setTimeout(()  => {
            const selectedEvent = new CustomEvent('searchby', { detail: value || '' });
            this.dispatchEvent(selectedEvent);            
        }, 500);
    }
}