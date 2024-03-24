import bugermenuPageObject from "../pageObject/burgermenuPageObject";

describe('visit the website', function() {
    beforeEach(() => {
        cy.visit(Cypress.env('website_url'));
        cy.wait(2000);
        cy.url().should('include','.nl/');
        bugermenuPageObject.getnotice()

    });

    it('Verify BurgerMenu can be open and close', () => {
        bugermenuPageObject.clickOnBurgerMenu();
        bugermenuPageObject.menuShouldBeVisble()
        bugermenuPageObject.clickOnCloseButton();
        bugermenuPageObject.menuShouldbBeNotVisible();
    })

    it('Verify BurgerMenu content', () => {
        bugermenuPageObject.clickOnBurgerMenu();
        bugermenuPageObject.menuShouldBeVisble();
        bugermenuPageObject.validateMenuOptions();
    })

    it('Verify BurgerMenu option page', () => {
        bugermenuPageObject.clickOnBurgerMenu();
        bugermenuPageObject.menuShouldBeVisble();
        bugermenuPageObject.ValidatefirstOption();
        bugermenuPageObject.ValidateThridOption();
        bugermenuPageObject.ValidateForthOption();
    })
});