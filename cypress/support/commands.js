// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { login } from './commands/login.js';
import { PLANS, PASSWORD_MODE } from '../fixtures/accountTypes.js';
//let users = require('../fixtures/accounts.json');
var path = require('path');

/**
 * [Will perform login using one of the predefined test accounts.]
 * @param  {[String]} [type="free"] [The type of the account. Ex: free, visionary, etc.]
 * @param  {[String]} [mode="regular"] [The password mode. Can be: regular, 2FA, 2PasswordMode or 2FA2PasswordMode.]
 */
Cypress.Commands.add('autoLogin', (plan = PLANS.free, passwordMode = PASSWORD_MODE.regular) => {
    console.log(Cypress.env('testAccountsData'));
    console.log(__dirname);
    console.log('RESET');
    console.log(path.join(process.cwd(), Cypress.env('testAccountsData')));
    console.log(path.join(__dirname, Cypress.env('testAccountsData')));
    const users = require(Cypress.env('testAccountsData'));
    if (plan === PLANS.free && passwordMode === PASSWORD_MODE.twoFactorTwoPasswordMode) {
        return login(users.user2.username, users.user2.password, users.user2.OTP, users.user2.secondPassword);
    }
    return login(users.user1.username, users.user1.password);
});

/**
 * [Login command]
 * @param  {[String]} username [The username.]
 * @param  {[String]} password [The password.]
 * @param  {[String]} OTP [The secret for the OTP(one time password) token.]
 * @param  {[String]} secondPassword [The mailbox password.]
 */
Cypress.Commands.add('login', (username, password, OTP, secondPassword) => {
    return login(username, password, OTP, secondPassword);
});
