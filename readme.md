# Playwright/Javascript Cucumber Project
## Introduction
This project integrates [Playwright with JavaScript] and [Cucumber-BDD] end-to-end testing.

## 📁 Project Structure  

```plaintext  
BDDCUCUMberJSProject/  
│  
├── config/              # Configuration files multi environment and multi browser run 
│   ├── .env.stage
│   └── .env.qa
│  
├── data/                # Data files for tests (e.g., CSVs, JSONs)  
│   ├── userdata.csv  
│   
│  
├── reports/             # Test execution reports  with graphical reprsentation
│   ├── cucumber_bootstarp_report.html
│   └── cucumber_report.json
│  
├── screenshot/          # Directory for storing screenshots  
│   ├── FAILED /# Directory for storing failed test cases  screenshots
│   └── PASSED  
│  
├── test/                # Directory for test files  
│   ├── feature/         # Cucumber feature files  
│   │   ├── ecomlogin.feature 
│   │   └── ...  
│   ├── pages/           # Page object model files  
│   │   ├── login.page.js  
│   │   └── ...  
│   └── steps/           # Step definitions for Cucumber  
│       ├── ecomloginStepdef.js
│       └── hooks.js
│  
├── utils/               # Utility functions and helpers  
│   ├── util.js  
│   └── ...  
│  
├── cucumber.json        # Cucumber configuration file  
├── package.json         # Project metadata and dependencies  
├── README.md            # Project documentation  
└── reporter.js          # Custom reporter for test results  

## Dependencies and why its used

This project requires the following dependencies:  
- **[Playwright](https://playwright.dev/)**: For browser automation.  
- **[Cucumber.js](https://cucumber.io/)**: For behavior-driven development (BDD) testing framework.  
- **[csv-parser](https://www.npmjs.com/package/csv-parser)**: For parsing CSV files  
- **[dotenv](https://www.npmjs.com/package/dotenv)**: For managing environment variables
- **[cucumber-html-reporter]: For Genrateing Graphical Report
1.Install Node.js: Make sure you have Node.js(providing environment to our playwright code)
->node -v  ,npm -v 
2.Create a New Project Directory: Open your terminal and create a new directory for your project.
->mkdir playwright-cucumber-project  
->cd playwright-cucumber-project  
3.Install Playwright(To support all Playwright-based code, install Playwright)
->npm install playwright@latest
4 Install Cucumber (To integrate Cucumber for behavior-driven development, run:)
->npm install playwright @cucumber/cucumber  
6.Install cucumber-html-reporter(For generating graphical reports of your test results, install:)
->npm i cucumber-html-reporter -D
7.Install csv parser (To parse CSV files for data-driven testing, install:)
->npm i csv-parser


***************📁Step by step process for creating playwright cucumber project using javascript📁**********
**📁Create features folder in the tests directory:
-This folder will contain all your feature files.

**📁Create step_definitions folder in the tests directory:
--This folder will include your step definitions.
--Optionally, add a hooks.js file to manage all hooks operations within the same folder.

**📁Create pages folder in the tests directory:
-This folder will contain your page object model (POM) files for better organization of your selectors and methods.

**📁Create cucumber.json file:
-This configuration file will maintain all Cucumber settings.

**Check the default package.json file:
--This file is created automatically when you initialize your Node.js project. It tracks all project dependencies.

**📁Create config folder at the root level:
-Use this folder to manage your environment files.

**📁Create data folder:
-This folder will maintain any data files used for fetching test data.

**📁Create reports folder:
-Use this folder to store various types of reports, including HTML, JSON, XML, and screenshots of tests.

**📁Create screenshots folder:
-This folder will store screenshots taken during test execution, helping you review passed and failed scenarios.

**📁Create utils folder at the root level:
-This folder will contain helper functions and constant definitions used throughout your tests.

**📁Create reporter.js file at the root level:
-This file wil provide the more info how our generated report will look.








