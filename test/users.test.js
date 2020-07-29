const request = require('supertest');
const expect = require('chai').expect;
const knex = require('knex');
const app = require('../app');

describe('Testing users', () => {
    before((done) => {
        knex.migrate.latest()
            .then(() => {
                return knex.seed.run();
            }).then(() => done())
    });

    it('Lists all users', (done) => {
        request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('array');
            }).catch((e) => {
                console.log(e);
            });
    })
});
