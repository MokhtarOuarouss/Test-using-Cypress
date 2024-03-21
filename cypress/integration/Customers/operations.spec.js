describe('Test Deposit and Withdraw amount ', () => {
    beforeEach(() => {
        
      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  
      cy.get('.borderM > :nth-child(1) > .btn').click()

      const UserName = 'Harry Potter';
      cy.get('#userSelect').select(UserName)
  
      cy.get('form.ng-dirty > .btn').click()
    })

    const depositAmount = (amount) => {
        cy.get('[ng-class="btnClass2"]').click();
        cy.get('.form-control').type(amount);
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.error').should('have.text', 'Deposit Successful');
    };


    it('Deposit Amount', () => {
      
        depositAmount(2000);
      
    });

    it('Withdraw Amount less than balance', () => {

        depositAmount(2000);
      
        cy.get('[ng-class="btnClass3"]').click()
        cy.get('.form-control').type(100)

        cy.get('form.ng-dirty > .btn').click()

        cy.get('.error')
        .should('have.text', 'Transaction successful')
      

        
    });

    it('Withdraw Amount more than balance', () => {

        depositAmount(2000);
      
        cy.get('[ng-class="btnClass3"]').click()
        cy.get('.form-control').type(3000)

        cy.get('form.ng-dirty > .btn').click()

        cy.get('.error')
        .should('have.text', 'Transaction Failed. You can not withdraw amount more than the balance.')
    });
  
    
  
        
  });
  