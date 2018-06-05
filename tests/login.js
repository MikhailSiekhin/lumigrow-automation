let zonesPage = require('../pages/zonesPage.js');
let operationsPage = require('../pages/operationsPage.js');

module.exports = {
    'Authenticate': operationsPage.login("mikhail.siekhin", "Password1"),
    'User Logs in': (browser) =>  {
        browser
            .expect.element(zonesPage.zonesLink).text.to.contain("ZONES");
        browser
            .end();
    }
};