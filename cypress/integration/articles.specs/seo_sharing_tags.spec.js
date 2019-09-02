/// <reference types="Cypress" />
const data = require('../../../sheared/data')

describe('Verify SEO tags cosmopolitan website:', () => {

    before(() => {
        cy.visit(data.article_url);
    });

    it('Should verify that title tag exists in the page header', () => {
        cy.get('.js.no-touchevents.pointerevents.no-mobile.no-tablet > head > title').should('be.exist');
    });

    it('Should verify that title tag content', () => {
        cy.get('.js.no-touchevents.pointerevents.no-mobile.no-tablet > head > title').should('contain', data.title);
    });

    (data.seoMetaTags).forEach(seoTag => {
        it(`Should verify that SEO meta tag (${seoTag.name}) exist in the page header`, () => {
            cy.get(`[name='${seoTag.name}']`).should('be.exist');
        });

        it(`Should verify that SEO meta tag (${seoTag.name}) content`, () => {
            cy.get(`[name='${seoTag.name}']`, { timeout: 20000 }).should('have.attr', 'content', seoTag.content);
        });
    });
});

describe('Verify Share tags in the header of cosmopolitan website:', () => {

    before(() => {
        cy.visit(data.article_url);
    });

    (data.shareMetaTags).forEach(shareTag => {
        it(`Should verify that share meta tag (${shareTag.name}) exist in the page header`, () => {
            cy.get(`[name='${shareTag.name}']`).should('be.exist');
        });

        it(`Should verify share meta tag (${shareTag.name}) content`, () => {
            cy.get(`[name='${shareTag.name}']`, { timeout: 20000 }).should('have.attr', 'content', shareTag.content);
        });

    });
});