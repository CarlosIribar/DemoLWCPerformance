import { LightningElement, api } from 'lwc';

export default class ContactListLwc extends LightningElement {
    @api level;
    @api contacts;


}