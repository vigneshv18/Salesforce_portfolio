import { LightningElement } from 'lwc';
import Image_URL from '@salesforce/resourceUrl/SkillLogo';

export default class Hero extends LightningElement {

    skillImage = Image_URL + '/Logos/Skillimg.jpg';

    handleClick(){
        window.location.href = '/resource/Resume';
    }
}