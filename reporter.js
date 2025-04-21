const reporter = require('cucumber-html-reporter');  
const path = require('path');  

const options = {  
    theme: 'bootstrap',  
    jsonFile: 'reports/cucumber_report.json', // Path to your JSON report file  
    output: 'reports/cucumber_bootstarp_report.html', // Path for the HTML report to be generated  
    reportSuiteAsScenarios: true,  
    launchReport: true,  
    intent: false, 
    storeScreenshots: true, // Enable screenshot storage  
    launchReport: true,
    name :'CucumberGraphicalReport',
    columnlLayout:1,
    metadata: {  
        'App Version': '1.0.0',  
        'Test Environment': 'QA',  
        'Tester': 'Sonali Panchal',  
        'Report Generation Date': new Date().toLocaleString(),  
        //'Duration': formattedDuration,  
    },  
    screenshotsDirectory: path.join(__dirname, 'reports/screenshots'),  
    customStyle: path.join(__dirname, 'utills/custom.css'), // Reference to your CSS file  
};  


reporter.generate(options); 