Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Ana')
    cy.get('#lastName').type('Selau')
    cy.get('#email').type('ana@teste.com')
    cy.get('#open-text-area').type('Teste')
    //cy.get('button[type="submit"]').click() (outra forma na linha de baixo)
    cy.contains('button', 'Enviar').click()
})
