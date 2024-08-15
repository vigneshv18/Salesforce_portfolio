import { LightningElement } from 'lwc';

import resume from '@salesforce/resourceUrl/Resume';

export default class NameSection extends LightningElement {
    handleClick(){
        window.open(resume, '_blank');
    }
}