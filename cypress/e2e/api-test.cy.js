const JSONdata = require ('./Resource/config.json')
describe('User API Tests', () => {
  //let enFirstname = generateName();
  let userid;

  it('Get User', () => {
    cy.request('GET', 'https://reqres.in/api/users?page=2')
      .then((response) => {
        console.log(response.body);
        expect(response.status).to.eq(200);
      });
  });

  it('Create User', () => {
    cy.request('POST', 'https://reqres.in/api/users', {
      name: JSONdata.user.username,
      job: JSONdata.account
    }).then((response) => {
      console.log(response.body);
      expect(response.status).to.eq(201);
      userid = response.body.id;
    });
  });

  it('Update User and verify message after this', () => {
    cy.request('PUT', `https://reqres.in/api/users/${userid}`, {
      name: 'Toon',
      job: 'QA Automated'
    }).then((response) => {
      console.log(response.body);
      expect(response.status).to.eq(200);
      expect(response.body.name).to.include('Toon');
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
