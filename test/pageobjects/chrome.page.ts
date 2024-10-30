class ChromePage {
    get searchBox() { return $('input[name="q"]'); }
    get firstResult() { return $('//h3'); }
    get logo() { return $('#logo'); }
    get hamburgerMenu() { return $('#menu-button'); }
    get footerText() { return $('footer'); }
}

module.exports = new ChromePage();
