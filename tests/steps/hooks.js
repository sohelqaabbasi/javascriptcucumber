// Import necessary functions and modules from Cucumber and Playwright  
const { Before, After, setDefaultTimeout, AfterStep, Status } = require("@cucumber/cucumber");  
const { chromium, firefox } = require("@playwright/test");  
const ecomLoginPage = require("../pages/ecompage"); // Import the ecomLoginPage class  
const path = require("path");  
const fs = require("fs");  
const dotenv = require("dotenv");  
const config = require("../../config/config"); // Load configuration settings  

// Set the default timeout for scenarios to 2 minutes  
setDefaultTimeout(1000 * 60 * 2);  

// Hook to execute before each scenario  
Before(async function() {  
    // Launch the browser and create a new context and page before each scenario  
    let browserType = config.browser; // Get browser type from config  
    console.log("----->" + browserType); // Log the browser type being used  

    // Switch statement to determine the browser to launch  
    switch (browserType) {  
        case "chrome":  
        case "gc":  
            this.browser = await chromium.launch({  
                headless: false, // Set to true for headless mode  
                channel: "chrome", // Launch Chrome  
                args: ["--start-maximized"], // Start with maximized window  
            });  
            break;  
        case "firefox":  
        case "ff":  
            this.browser = await firefox.launch({  
                headless: false,  
                channel: "firefox", // Launch Firefox  
                args: ["--start-maximized"], // Start with maximized window  
            });  
            break;  
        case "edge":  
        case "msedge":  
            this.browser = await chromium.launch({  
                headless: false,  
                channel: "edge", // Launch Edge  
                args: ["--start-maximized"], // Start with maximized window  
            });  
            break;  
        default:  
            throw new Error(`Invalid Browser type ${browserType} is passed, please correct it`); // Error for unsupported browser types  
    }  

    // Create a new browser context and page for testing  
    this.brCtx = await this.browser.newContext();  
    this.page = await this.brCtx.newPage();  
    this.ecomobj = new ecomLoginPage(this.page); // Instantiate the ecomLoginPage object  

    // Uncomment the following block if you want to create a 'screenshots' directory for storing screenshots  
    // this.screenshotDir = path.join(__dirname, "screenshots");  
    // if (!fs.existsSync(this.screenshotDir)) {  
    //     fs.mkdirSync(this.screenshotDir, { recursive: true });  
    // }  
});  

// Hook to capture and save screenshots after each step  
AfterStep(async function({ result, pickle }) {  
    const stepName = pickle.name.replace(/[\s\/\\:*?"<>|]/g, '_'); // Replace invalid characters in step names for filenames  

    // Capture and attach a screenshot for every step  
    const screenshotBuffer = await this.page.screenshot({});  
    this.attach(screenshotBuffer, 'image/png'); // Attach screenshot to the report  
    console.log(`Screenshot saved for step: ${stepName}`); // Log screenshot saving  

    // Log the result status of the step  
    console.log("Each step status: " + result.status);  

    // Handle screenshots for failed steps  
    if (result.status === Status.FAILED) {  
        const failedScreenshotPath = `screenshots/FAILED/failed-${stepName}.png`; // Path for the failed step screenshot  
        await this.page.screenshot({ path: failedScreenshotPath }); // Capture and save the failed step screenshot  
        console.log(`Failed step screenshot saved: ${failedScreenshotPath}`); // Log the path of the failed step screenshot  
    }  
});  

// Hook to execute after each scenario  
After(async function (scenario) {  
    // Close the browser context and the browser after each scenario  
    await this.brCtx.close(); // Close the browser context  
    await this.browser.close(); // Close the browser instance  
});  