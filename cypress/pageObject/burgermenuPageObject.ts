const testdata = require('../fixtures/testdata');

class burgermenuObject {
    notice= '#sp_message_iframe_996951';
    document= '0.contentDocument';
    agree= '[title=Akkoord]';
    burgermenuIcon= '[data-menu-trigger=sections]';
    menu= '[data-menu=sections]';
    closeButton= 'div.menu-close';
    option= '[data-text="bewaarde artikelen"]';
    backMenuIcon= 'svg.app-header-menu__back-icon';
    appHeaderIcon= 'div.app-header-home__brand';
    appMenu= '[data-menu="sections"]';
    thirdBackPage= 'svg.app-header-default__back-icon';
    forthBackPage= 'svg.app-header-default__back-icon';

    getnotice() {
        return cy.get(this.notice).its(this.document)
        .find(this.agree).click().then(() =>{
            cy.origin(Cypress.env('website_url'), () => {
                cy.on('uncaught:exception', (e) => {
                    if (e.message.includes('Things went bad')) {
                        return false;
                    }
                })
            })
        });
    }

    getCancle() {
        return cy.find(this.agree);
    }

    clickOnBurgerMenu() {
        return cy.get(this.burgermenuIcon).eq(0).should('be.visible').click();
    }

    menuShouldBeVisble() {
        return cy.get(this.menu).should('be.visible');
    }

    menuShouldbBeNotVisible() {
        return cy.get(this.menu).should('not.be.visible');
    }

    clickOnCloseButton() {
        return cy.get(this.closeButton).eq(1).click();
    }

    ValidatefirstOption() {
        cy.get(this.appMenu)
        .find('ul').eq(0).find('li').eq(0).click();
        cy.url().should('include','/bewaard');
        cy.get(this.backMenuIcon).click();
        cy.get(this.appHeaderIcon).should('be.visible');
        cy.get(this.burgermenuIcon).eq(0).should('be.visible').click();
        cy.wait(2000);
    }

    ValidateThridOption() {
        cy.get(this.appMenu)
        .find('ul').eq(0).find('li').eq(2).click();
        cy.url().should('include','/renderer');
        cy.get(this.thirdBackPage).click();
        cy.get(this.appHeaderIcon).should('be.visible');
        cy.get(this.burgermenuIcon).eq(0).should('be.visible').click();
        cy.wait(2000);
    }

    ValidateForthOption() {
        cy.get(this.appMenu)
        .find('ul').eq(0).find('li').eq(3).click();
        cy.url().should('include','/puzzels/uitgelicht');
        cy.get(this.forthBackPage).click();
        cy.get(this.appHeaderIcon).should('be.visible');
        cy.get(this.burgermenuIcon).eq(0).should('be.visible').click();
        cy.wait(2000);
    }

    clickBackmenuIcon() {
        return cy.get(this.backMenuIcon).click();
    }

    ValidateHomePageIcon() {
        return cy.get(this.appHeaderIcon).should('be.visible');
    }

    validateMenuOptions() {

        return cy.get(this.appMenu)
        .find('ul').eq(0)
        .find('li').each(($li, index) => {
            cy.wrap($li).should('contain.text', testdata.menuOptions[index]);
        });
    }
}

export default new burgermenuObject();
