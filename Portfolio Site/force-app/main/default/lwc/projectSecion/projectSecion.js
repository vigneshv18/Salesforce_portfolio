import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/ProjectLogos';

export default class ProjectSecion extends LightningElement {


    projectImage = Image_Url + '/ProLogo/Designer.png';

    projectData = [
        {
            id:1,
            name:'Industrial Automation Limited',
            description:'Implemented Salesforce for IAL, cutting processing time by 40%, Increasing efficiency by digitalization. Cross-team collaboration improved system efficiency by 30%, elevating user satisfaction by 35%.',
            technology:'Salesforce, LWC, Apex, Triggers',
            role:'Salesforce Developer Trainee'
        },

        {
            id:2,
            name:'LTFS SME Loan',
            description:'Optimized Salesforce for SME loan origination, cutting processing time by 30%, addressing 15 critical defects. Cross-team collaboration improved system efficiency by 20%, elevating user satisfaction by 25%.',
            technology:'Salesforce, LWC, Apex, Triggers',
            role:'QA Analyst'
        }
    ]
}