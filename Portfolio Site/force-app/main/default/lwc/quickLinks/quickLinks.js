import { LightningElement } from 'lwc';
import Image_Url from '@salesforce/resourceUrl/UpdatedImgs';
import { NavigationMixin } from 'lightning/navigation';


export default class QuickLinks extends NavigationMixin (LightningElement) {

    data = [
        {
            id:1,
            image: Image_Url + '/UpdatedExpCldImg/Projectimage.jpg',
            text: 'About'
        },
      
        {
            id:2,
            image: Image_Url + '/UpdatedExpCldImg/Projects.jpg',
            text: 'Skill'
        },
        {
            id:3,
            image: Image_Url + '/UpdatedExpCldImg/ProjectsAni.jpg',
            text: 'Project'
        }
      
    ];

    handleClick(event){
        let selectedCard = event.currentTarget.dataset.id;
        console.log('selectedCard:'+ JSON.stringify(selectedCard));
        if(selectedCard == 1){
            this.navigateToPages('about__c');
        }
        else  if(selectedCard == 2){
            this.navigateToPages('skill__c');
        }
        else  if(selectedCard == 3){
            this.navigateToPages('project__c');
        }
    }

    navigateToPages(pageApiName){
        console.log('page Nav func: ' + JSON.stringify(pageApiName));
        this[NavigationMixin.Navigate]({
            type:'comm__namedPage',
            attributes:{
                name:pageApiName
            }
        })
    }
}