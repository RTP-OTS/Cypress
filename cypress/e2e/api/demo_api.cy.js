import '@testing-library/cypress/add-commands'
describe('User Management', () => {
    var userid;
    it('Get User', () => {
      cy.request('GET', 'https://reqres.in/api/users?page=2')
        .then((response) => {
          console.log(response.body);
          expect(response.status).to.eq(200);
        });
    });
  
    it('Create User', () => {
      cy.request('POST', 'https://reqres.in/api/users', {
        body: { "name": "Toon", "job": "QA Automated" },
        headers: { "Accept": "application/json" }
      }).then((response) => {
        console.log(response.body);
        expect(response.status).to.eq(201);
        userid = response.body.id;
      });
    });
  
    it('Update User and verify message after this', () => {
      cy.request('PUT', `https://reqres.in/api/users/${userid}`, {
        name: 'Tester',
        job: 'QA Automated'
      }).then((response) => {
        // console.log(response.body);
        expect(response.status).to.eq(200);
        expect(response.body.name).to.include('Tester');
        expect(response.body.job).to.include('QA Automated');
      });
    });
  
    it('Delete user after update', () => {
      cy.request('DELETE', `https://reqres.in/api/users/${userid}`)
        .then((response) => {
          expect(response.status).to.eq(204);
        });
    });
  });
  