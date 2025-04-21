const BASE_URL = "https://ecommerce-playground.lambdatest.io/";  

const TIMEOUTS = {  
    PAGE_LOAD: 30000, // Timeout for waiting for the page to load  
    ELEMENT_WAIT: 10000, // Timeout for waiting for specific elements  
};  

// Exporting the constants as a module  
module.exports = {  
    BASE_URL,
    TIMEOUTS,  
};
