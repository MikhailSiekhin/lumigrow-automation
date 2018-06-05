let operationsPage = require('../pages/operationsPage.js');

module.exports = {
    'Authenticate': operationsPage.login("mikhail.siekhin", "Password1"),

    'Create DLI program': function(browser)  {
        const dliProgramName = 'AutomationDLI'+' '+ Math.floor((Math.random() * 10000) + 1);

        operationsPage
            .createDLI(dliProgramName)(browser);
        browser
            .end();
    }
};