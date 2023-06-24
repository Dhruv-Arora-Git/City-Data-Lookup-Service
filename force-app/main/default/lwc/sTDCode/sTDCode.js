import { LightningElement } from 'lwc';
import getSTDCode from '@salesforce/apex/STDCodes.getSTDCode';

const columns = [
    { label: 'LDCA', fieldName: 'ldca' },
    { label: 'SDCA', fieldName: 'sdca' },
    { label: 'State', fieldName: 'state' },
    { label: 'STD Code', fieldName: 'std', type: 'phone' },
];

export default class STDCode extends LightningElement {
    columns = columns;
    city;
    result;
    error;
    isLoaded;

    getCity() {
        this.city = this.refs.cityText.value;
        window.console.log('city ' + JSON.stringify(this.city));
    }

    findCode() {
        this.getCity();
        this.isLoaded = true;
        getSTDCode({ city: this.city }).then(data => {
            this.isLoaded = false;
            this.result = data;
            console.log('res ' + JSON.stringify(this.result));
        }).catch(error => {
            this.isLoaded = false;
            this.error = error;
        });
    }
}