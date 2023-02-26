const { expect } = require('chai');

class PelangganPage{

    get fieldEmail(){
        return $('#email');
    }

    get fieldPassword(){
        return $('#password');
    }

    get btnLogin(){
        return $('button[type="submit"]');
    }

    get headerKasirAja(){
        return $('h3.chakra-heading')
    }

    get btnMenuPelanggan(){
        return $('a[href="/customers"]');
    }

    get btnTambahPelanggan(){
        return $('a[href="/customers/create"]');
    }

    get fieldNama(){
        return $('#nama');
    }

    get fieldNoHP(){
        return $('label[for="no.hp"] + div > input');
    }

    get fieldAlamat(){
        return $('#alamat');
    }

    get fieldKeterangan(){
        return $('#keterangan');
    }

    get btnSimpan(){
        return $('button.chakra-button');
    }

    get errorAlert(){
        return $('.chakra-alert');
    }

    async openUrl(){
        await browser.url('/');
        await expect(await browser.getUrl()).to.include('/login');
    }

    async login(email, password){
        await (await this.fieldEmail).addValue(email);
        await (await this.fieldPassword).addValue(password);
        await (await this.btnLogin).click();
        await (await this.headerKasirAja).waitForDisplayed();
        await expect(await browser.getUrl()).to.include('/dashboard');
    }

    async clickMenuPelanggan(){
        await (await this.btnMenuPelanggan).waitForDisplayed();
        await (await this.btnMenuPelanggan).click();
        await expect(await browser.getUrl()).to.include('/customers');
    }

    async clickTambahPelanggan(){
        await (await this.btnTambahPelanggan).waitForDisplayed();
        await (await this.btnTambahPelanggan).click();
        await expect(await browser.getUrl()).to.include('/customers/create');
    }

    async emptyForm(){
        await (await this.fieldNama).waitForDisplayed();
        await expect(await (await this.fieldNama).getValue()).to.be.empty;
        await expect(await (await this.fieldNoHP).getValue()).to.be.empty;
        await expect(await (await this.fieldAlamat).getValue()).to.be.empty;
        await expect(await (await this.fieldKeterangan).getValue()).to.be.empty;
    }

    async fillNama(nama){
        await (await this.fieldNama).addValue(nama);
    }

    async fillNoHP(nohp){
        await (await this.fieldNoHP).addValue(nohp);
    }

    async fillAlamat(alamat){
        await (await this.fieldAlamat).addValue(alamat);
    }

    async fillKeterangan(keterangan){
        await (await this.fieldKeterangan).addValue(keterangan);
    }

    async clickSimpan(){
        await (await this.btnSimpan).click();
    }

    async verifyErrorAlertMessageFieldNama(){
        await (await this.errorAlert).waitForDisplayed();
        await expect(await (await this.errorAlert).getText()).to.equal('"name" is not allowed to be empty');
        await browser.reloadSession();
    }

    async verifyErrorAlertMessageFieldNoHP(){
        await (await this.errorAlert).waitForDisplayed();
        await expect(await (await this.errorAlert).getText()).to.equal('"phone" must be a number');
    }
}

module.exports = new PelangganPage();