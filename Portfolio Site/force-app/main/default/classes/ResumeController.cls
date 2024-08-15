public with sharing class ResumeController {
    @AuraEnabled
    public static string getResumeDownloadUrl(){
        string fieldId = '1722542320000';
        string DownloadUrl = 'https://myportfolio-b-dev-ed--c.develop.vf.force.com/resource/1722542320000/Resume';
        return DownloadUrl;
    }
}