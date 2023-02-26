import { Given, When, Then } from '@wdio/cucumber-framework';

import PelangganPage from '../pageobjects/pelanggan.page';

Given(/^I am on the login page$/, async () => {
    await PelangganPage.openUrl();
});

When(/^I login with "(.*)" and "(.*)"$/, async (email, password) => {
    await PelangganPage.login(email, password)
});

Then(/^I click menu pelanggan$/, async () => {
    await PelangganPage.clickMenuPelanggan();
});

Then(/^I click button (.*)$/, async (button) => {
    switch (button) {
        case 'tambah':
            await PelangganPage.clickTambahPelanggan();
            break;

        case 'simpan':
            await PelangganPage.clickSimpan();
            break;
    
        default:
            break;
    }
});

Then(/^I (.*) field$/, async (scenario) => {
    switch (scenario) {
        case 'dont fill any':
            await PelangganPage.emptyForm();
            break;

        case 'fill invalid data to no.hp':
            await PelangganPage.fillNama('lorem')
            await PelangganPage.fillNoHP('ipsum');
            break;
    
        default:
            break;
    }
});

Then(/^I should see error alert message (.*)$/, async (message) => {
    switch (message) {
        case '"name" is not allowed to be empty':
            await PelangganPage.verifyErrorAlertMessageFieldNama();
            break;

        case '"phone" must be a number':
            await PelangganPage.verifyErrorAlertMessageFieldNoHP();
            break;
    
        default:
            break;
    }
});

