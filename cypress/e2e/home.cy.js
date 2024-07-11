// describe('Home Page Test',()=>{
//     it('Check the Input field',()=>{
//         cy.visit('/')
//         cy.get('input').type('Cinderella')
//         cy.get('#mybutton').should('be.visible')
//         cy.get('#mybutton').click();
//         cy.contains('Welcome, Cinderella')
//         cy.get('input').should('have.value','Cinderella')

//     })
// })

describe('Home component', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('renders input field and button', () => {
      cy.get('input[type="text"]').should('be.visible')
      cy.get('button#mybutton').should('be.visible')
    })
  
    it('updates name state when input field is changed', () => {
      const newName = 'Bhargav'
      cy.get('input[type="text"]').type(newName)
      cy.get('input[type="text"]').should('have.value', newName)
    })
  
    it('submits form and updates showName state', () => {
      const newName = 'Bhargav'
      cy.get('input[type="text"]').type(newName)
      cy.get('button#mybutton').click()
      cy.get('p').should('contain', `Welcome, ${newName}`)
    })
  
    it('adds new row to table when form is submitted', () => {
      const newName = 'Bhargav'
      cy.get('input[type="text"]').type(newName)
      cy.get('button#mybutton').click()
      cy.get('table tr').should('have.length', 2) // initial row + new row
    })
  
    it('deletes row from table when delete button is clicked', () => {
      const newName = 'Bhargav'
      cy.get('input[type="text"]').type(newName)
      cy.get('button#mybutton').click()
      cy.get('table tr').should('have.length', 2) // initial row + new row
      cy.get('table tr:last-child button').click()
      cy.get('table tr').should('have.length', 1) // initial row only
    })
  })