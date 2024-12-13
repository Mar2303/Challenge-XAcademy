
Cypress.Commands.add('loginUser1',(type = 'user1') =>{
    cy.fixture('datos_test').then((data)=>{
        const loginData = data[type]
    
    cy.get('[placeholder="Username"]').clear().type(loginData.user)//Input user
    cy.get('[placeholder="Password"]').clear().type(loginData.password)//Input password
    cy.get('[data-test="login-button"]').click()//Click on Login button
    })
})
Cypress.Commands.add('loginUser2',(type = 'user2') =>{
    cy.fixture('datos_test').then((data) =>{
        const loginData = data[type]
    cy.get('[placeholder="Username"]').clear().type(loginData.user)//Input user
    cy.get('[placeholder="Password"]').clear().type(loginData.password)//Input password
    cy.get('[data-test="login-button"]').click()//Click on Login button
    })
})