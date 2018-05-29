module.exports = {
    'User Logs in': (client) => {
        const loginPage = client.page.loginPage();
        const zonesPage = client.page.zonesPage();

        loginPage
            .login("mikhail.siekhin", "Password1");

        zonesPage
            .expect.element('@zonesLink').text.to.contain("ZONES");

        client.end();
    }
};