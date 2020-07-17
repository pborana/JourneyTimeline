import { LightningElement, api, track, wire } from 'lwc';

import getEmployee from '@salesforce/apex/EmployeeController.getContactByRecordId';

export default class JourneyTimelineEmployee extends LightningElement {
    @api recordId;
    @track employee;
    @track isMonica;
    @track isAlex;
    employeeName;

    @wire(getEmployee, { recordId: '$recordId' })
    getemployee(result) {
       // this.refreshTable = result;
        if (result.data) {
            this.employee = result.data;
            this.employeeName = this.employee.Name;
            this.isMonica = this.employee.Name;
        
            this.error = undefined;

        } else if (result.error) {
            this.error = result.error;
            this.employee = undefined;
        }
    }


}