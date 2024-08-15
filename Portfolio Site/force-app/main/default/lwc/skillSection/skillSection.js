import { LightningElement , api} from 'lwc';
import Image_Url from '@salesforce/resourceUrl/ProjectLogos';
export default class SkillSection extends LightningElement {

    @api skillName5;
    @api skillBarValue5;
    @api skillName4;
    @api skillBarValue4;
    @api skillName3 ;
    @api skillBarValue3;
    @api skillName1 ;
    @api skillBarValue1;
    @api skillName2 ;
    @api skillBarValue2;

    heroImage = Image_Url + '/ProLogo/HomeHero.jpg';
}

