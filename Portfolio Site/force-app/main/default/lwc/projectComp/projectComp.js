import { LightningElement, track } from 'lwc';

export default class ProjectComp extends LightningElement {
    

    @track projectData = [
        {
            id:1,
            company: 'SaasGuru',
            name:'Industrial Automation Limited',
            description:'Implemented Salesforce for IAL, cutting processing time by 40%, Increasing efficiency by digitalization. Cross-team collaboration improved system efficiency by 30%, elevating user satisfaction by 35%.',
            technology:'Salesforce, LWC, Apex, Triggers',
            role:'Salesforce Developer Trainee'
        },

        {
            id:2,
            company: 'Yethi Consultancy',
            name:'LTFS SME Loan',
            description:'Optimized Salesforce for SME loan origination, cutting processing time by 30%, addressing 15 critical defects. Cross-team collaboration improved system efficiency by 20%, elevating user satisfaction by 25%.',
            technology:'Salesforce- Admin, LWC, Apex, Triggers',
            role:'QA Analyst'
        },
        {
            id:3,
            company: 'Quality Kiosk',
            name:'Cholamandalam Finance and Investment',
            description:'Implemented Vehicle Loan Origination System in Salesforce, completing API testing. Minimizing processing duration by 20% and improving system efficiency by 60%. Identified and resolved 20+ critical issues.',
            technology:'Salesforce- Admin, LWC, Apex, Triggers',
            role:'Test Engineer'
        },
        {
            id:4,
            company: 'Quality Kiosk',
            name:'EQUITAS Retail Loan Originating',
            description:'Applied Retail LOS at NEWGEN, specializing in API testing. Improved LOS process, streamlining Process time by 10%. Addressed 18 critical defects, ensuring a smooth end-to-end process.',
            technology:'Newgen, Oracle(LMS)',
            role:'Test Engineer'
        },
        {
            id:5,
            company: 'Edatalabs Pvt.Ltd',
            name:'Karur Vysya Bank RLOS',
            description:'Led KVB RLOS project for Digital Transformation. Configured Salesforce workflows, reducing application processing time by 20%. Achieved positive ROI, meeting tight deadlines, ensuring exceptional borrower experience.',
            technology:'Salesforce- Admin, LWC, Apex, Triggers',
            role:'Test Engineer'
        }

    ];
    activeSectionName = this.projectData.map(project => project.name);
}
