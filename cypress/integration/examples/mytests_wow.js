describe('My First Test', () => {
    beforeEach(() => {
        // arbitrary code you want running before your tests start: setup
        cy.visit("http://localhost:3000");
      });
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    });
  
});