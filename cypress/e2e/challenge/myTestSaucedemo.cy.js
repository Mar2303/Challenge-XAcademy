describe('challenge compra user 1', {testIsolation:false},() => {
  
  it('visit the webpage', ()=>{
    cy.visit('https://www.saucedemo.com')//Visit web site
  })
  it('test login',() =>{
    cy.loginUser1('user1')
  })
  it('verify login',() =>{
    cy.get('[data-test="title"]').contains('Products')//Verify successful login
  })
  it('add items to the cart', ()=>{
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('contain', '1')
  })
  it('checkout',()=>{
    cy.get('.shopping_cart_badge').click()
    cy.get('[data-test="checkout"]').click()
  })
  it('validate checkout',()=>{
    cy.get('[placeholder="First Name"]').clear().type('Ana')
    cy.get('[placeholder="Last Name"]').clear().type('Vera')
    cy.get('[placeholder="Zip/Postal Code"]').clear().type('5900')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()

  })
  it('logout',()=>{
    cy.get('#react-burger-menu-btn').click()//Click on Menu
    cy.get('#logout_sidebar_link').click()//Click on Logout
  })
  it('verify logout',() =>{
    cy.get('[data-test="login-button"]').contains('Login')
  })
})

describe('challenge compra user 2', {testIsolation:false},() => {

  it('visit the webpage', ()=>{
    cy.visit('https://www.saucedemo.com')
  })
  it('test login',() =>{
    cy.loginUser2('user2')
  })
  it('verify login',() =>{
    cy.get('[data-test="title"]').contains('Products')
  })
  it('add items to the cart', ()=>{
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('.shopping_cart_badge').should('contain', '2')
  })
  it('checkout',()=>{
    cy.get('.shopping_cart_badge').click()
    cy.get('[data-test="checkout"]').click()
  })
  it('validate checkout',()=>{
    cy.get('[placeholder="First Name"]').clear().type('Pedro')
    cy.get('[placeholder="Last Name"]').clear().type('Suarez')
    cy.get('[placeholder="Zip/Postal Code"]').clear().type('5800')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()

  })
  it('logout',()=>{
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
  })
  it('verify logout',() =>{
    cy.get('[data-test="login-button"]').contains('Login')
  })
})