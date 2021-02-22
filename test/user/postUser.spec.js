var chai = require("chai");
var chaiHttp = require("chai-http");

chai.use(chaiHttp);

const request = chai.request("https://reqres.in")

const expect = chai.expect;

describe('POST User', () => {

    context('Quando testo o user service usando o método POST', () => {

        it('Deve cadastrar um usuário', (done) => {
            request
                .post('/api/users')
                .send({
                    "name": "Gustavo Cardoso",
                    "job": "Post Method"
                })
                .end((err, res) => {
                    expect(res).to.has.status(201);
                    console.log(res.body);
                    done();
                })
        })
    
        it('Deve cadastrar um usuário para usar PUT', (done) => {
            request
                .post('/api/users')
                .send({
                    "name": "Gustavo Cardoso",
                    "job": "Put Method"
                })
                .end((err, res) => {
                    expect(res).to.has.status(201);
                    console.log(res.body);
                    done();
                })           
        })
    
        it('Deve cadastrar um usuário para usar DELETE', (done) => {
            request
                .post('/api/users')
                .send({
                    "name": "Gustavo Cardoso",
                    "job": "Delete Method"
                })
                .end((err, res) => {
                    expect(res).to.has.status(201);
                    console.log(res.body);
                    done();
                })           
        })
    })
    
})
