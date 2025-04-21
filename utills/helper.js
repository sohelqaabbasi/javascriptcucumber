const path = require("path"); // For handling and transforming file paths  
const fs = require("fs"); // For interacting with the file system  
const csv = require("csv-parser"); // For parsing CSV files  

/**  
 * Takes a screenshot of the provided page and saves it to a specified directory.  
 *  
 * @param {Object} page - The Playwright page object to capture the screenshot from.  
 * @param {string} scenarioName - The name of the scenario for identification in the filename.  
 * @param {string} stepName - The name of the step for identification in the filename.  
 * @returns {Promise<string>} - The path of the saved screenshot for reporting purposes.  
 */  
async function takeScreenshot(page, scenarioName, stepName) {  
    const screenshotDir = path.join(__dirname, "../screenshots/PASSED"); // Directory for saving screenshots  

    // Ensure the directory exists; if not, create it  
    if (!fs.existsSync(screenshotDir)) {  
        fs.mkdirSync(screenshotDir, { recursive: true }); // Create directory recursively if it doesn't exist  
    }  

    // Generate a timestamped filename to ensure uniqueness  
    const date1 = new Date();  
    const timestamp = formatDate(date1); // Format the date to a specific format  
    const sanitizedStepName = stepName.replace(/[\s\/\\:*?"<>|]/g, '_'); // Sanitize step name  
    const screenshotPath = path.join(screenshotDir, `${timestamp}_${scenarioName}_${sanitizedStepName}.png`); // Construct the screenshot path  

    // Capture and save the screenshot  
    await page.screenshot({ path: screenshotPath });  

    return screenshotPath; // Return the path for logging and reporting purposes  
}  

/**  
 * Formats the date into a string formatted as DDMMYYYY.  
 *  
 * @param {Date} date - The date object to format.  
 * @returns {string} - The formatted date string.  
 */  
function formatDate(date) {  
    const day = String(date.getDate()).padStart(2, '0'); // Format day with leading zero  
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Format month with leading zero  
    const year = date.getFullYear(); // Get full year  
    return `${day}${month}${year}`; // Return formatted date  
}  

/**  
 * Reads a CSV file and returns its content as an array of objects.  
 *  
 * @param {string} filePath - The path to the CSV file to read.  
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of objects representing the CSV data.  
 */  
function readCSV(filePath) {  
    return new Promise((resolve, reject) => {  
        const results = []; // Initialize an array to hold the CSV data  
        fs.createReadStream(filePath) // Create a read stream for the CSV file  
            .pipe(csv()) // Pipe the stream through the csv-parser  
            .on('data', (data) => results.push(data)) // Push each row of data to the results array  
            .on('end', () => resolve(results)) // Resolve the promise with results when reading is done  
            .on('error', (error) => reject(error)); // Reject the promise on error  
    });  
}  

/**  
 * Selects an option from a dropdown element.  
 *  
 * @param {Object} page - The Playwright page object.  
 * @param {string} selector - The selector for the dropdown element.  
 * @param {string} optionValue - The value of the option to select.  
 * @returns {Promise} - A promise that resolves when the option is selected.  
 */  
function selectDropdown(page, selector, optionValue) {  
    return page.selectOption(selector, optionValue); // Select the option in the dropdown  
}  

/**  
 * Sends keystrokes to a specified input field.  
 *  
 * @param {Object} page - The Playwright page object.  
 * @param {string} selector - The selector for the input element.  
 * @param {string} keys - The keys to input.  
 * @returns {Promise} - A promise that resolves when the keys have been sent.  
 */  
function sendKeys(page, selector, keys) {  
    return page.fill(selector, keys); // Fill the input field with specified keys  
}  

/**  
 * Clicks on an element identified by the selector.  
 *  
 * @param {Object} page - The Playwright page object.  
 * @param {string} selector - The selector for the element to click.  
 * @returns {Promise} - A promise that resolves when the click action is completed.  
 */  
function click(page, selector) {  
    return page.click(selector); // Click on the specified element  
}  

// Exporting utility functions for use in other modules  
module.exports = {  
    takeScreenshot,  
    readCSV,  
    formatDate,  
    selectDropdown,  
    sendKeys,  
    click  
};  