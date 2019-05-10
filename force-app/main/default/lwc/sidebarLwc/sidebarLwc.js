import { LightningElement, track } from 'lwc';

const getSelectedLevelClass = (level, selectedLevel) => {
    return selectedLevel === level ? 'slds-nav-vertical__item slds-is-active' : 'slds-nav-vertical__item';
}

export default class SidebarLwc extends LightningElement {
    @track selectedLevel = 'All';

    get allClasses() {
        return getSelectedLevelClass('All', this.selectedLevel);
    }

    get primaryClasses() {
        return getSelectedLevelClass('Primary', this.selectedLevel);
    }

    get secondaryClasses() {
        return getSelectedLevelClass('Secondary', this.selectedLevel);
    }

    get terciaryClasses() {
        return getSelectedLevelClass('Terciary', this.selectedLevel);
    }

    setAll(){
        this.selectedLevel = 'All';
        const selectedEvent = new CustomEvent('changelevel', { detail: 'All' });
        this.dispatchEvent(selectedEvent);
    }

    setPrimary(){
        this.selectedLevel = 'Primary';
        const selectedEvent = new CustomEvent('changelevel', { detail: 'Primary' });
        this.dispatchEvent(selectedEvent);
    }

    setSecondary(){
        this.selectedLevel = 'Secondary';
        const selectedEvent = new CustomEvent('changelevel', { detail: this.selectedLevel });
        this.dispatchEvent(selectedEvent);
    }

    setTerciary(){
        this.selectedLevel = 'Terciary';
        const selectedEvent = new CustomEvent('changelevel', { detail: this.selectedLevel });
        this.dispatchEvent(selectedEvent);
    }
}