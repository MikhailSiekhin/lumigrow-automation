const loginCommands = {
    login(email, pass) {
        return this
            .navigate()
            .waitForElementVisible('@emailInput')
            .setValue('@emailInput', email)
            .setValue('@passInput', pass)
            .waitForElementVisible('@loginButton')
            .click('@loginButton')
    }
};

module.exports = {
    url: 'https://two.dev.lumigrow.com/#!/zones',
    commands: [loginCommands],
    elements: {
        emailInput: '#loginusername',
        passInput: '#loginpassword22',
        loginButton: '#loginButton'
    }
};