import { getGreeting } from '../support/app.po';

describe('npx-angular-ngrx-nest', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to npx-angular-ngrx-nest!');
  });
});
