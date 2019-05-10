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

    setAll(event){
        console.log(event.target.dataset.level);
        this.selectedLevel = 'All';
    }

    setPrimary(event){
        console.log(event.target.dataset.level);
        this.selectedLevel = 'Primary';
    }

    setSecondary(event){
        console.log(event.target.dataset.level);
        this.selectedLevel = 'Secondary';
    }

    setTerciary(event){
        console.log(event.target.dataset.level);
        this.selectedLevel = 'Terciary';
    }
}