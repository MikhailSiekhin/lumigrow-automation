let loginPage = require('../pages/loginPage.js');
let programsPage = require('../pages/programsPage.js');

module.exports = {

    'login' : function(email, pass) {
        return function (browser) {
            browser
                .url(browser.launch_url)
                .waitForElementVisible(loginPage.emailInput)
                .setValue(loginPage.emailInput, email)
                .setValue(loginPage.passInput, pass)
                .waitForElementVisible(loginPage.loginButton)
                .click(loginPage.loginButton)
        }
    },
    createDLI : function(name) {
        return function (browser) {
            browser
                .waitForElementVisible(programsPage.programsLink)
                .click(programsPage.programsLink)
                .waitForElementVisible(programsPage.addProgramButton)
                .click(programsPage.addProgramButton)
                .waitForElementVisible(programsPage.dliProgramType)
                .click(programsPage.dliProgramType)
                .click(programsPage.applyProgramButton)
                .clearValue(programsPage.programNameInput)
                .setValue(programsPage.programNameInput, name)
                .expect.element(programsPage.programNameInput).to.have.value.that.equals(name);
            browser
                .expect.element(programsPage.okButton).to.be.enabled;
            browser
                .click(programsPage.okButton)
        }
    },

};