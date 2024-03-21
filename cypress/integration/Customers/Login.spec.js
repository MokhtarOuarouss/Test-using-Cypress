describe('Test Customer Login  ', () => {

    it('Login', () => {
      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  
      cy.get('.borderM > :nth-child(1) > .btn').click()

      const UserName = 'Harry Potter';
      cy.get('#userSelect').select(UserName)
  
      cy.get('form.ng-dirty > .btn').click()
  
      cy.get('.logout').should('exist')
      
    });
  
    
  
        
  });
  