# Installation
Use the node package module ($npm install).
Use the Cypress to start the test ($npm run cypress).

# Description

Test SEO and Share tags in cosmopolitan articles.

## Functional E2E Tests Via Cypress
Cypress functional test files can be found in `/cypress/integration`
Cypress configuration file can be found in `/cypress.json`
Default base URL is currently `https://www.cosmopolitan.com/`

# Test Cases:

1- Should verify that title tag exists in the page header.
2- Should verify that title tag has a contain same as expected.
3-Should verify that SEO meta tags with description and keywords attribute name exist in the page header.
4-Should verify that SEO meta tags with description and keywords attribute name contents.
5-Should verify that share meta tags with og:title,og:image and og:url attribute name exist in the page header.
6-Should verify share meta tags with og:title,og:image and og:url attribute name content
