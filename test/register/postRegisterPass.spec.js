var chai = require("chai");
var chaiHttp = require("chai-http");

chai.use(chaiHttp);

const request = chai.request("https://reqres.in")

const expect = chai.expect;

describe('POST Register Sucess', () => {

    context('Quando eu testo o service register usando o método POST', () => {

        it('Deve registar um usuário com sucesso', (done) => {
            request
                .post('/api/register')
                .send({
                    "email": "eve.holt@reqres.in",
                    "password": "pistola"
                })
                .end((err, res) => {
                    expect(res).to.has.status(200);
                    console.log(res.body);
                    done();
                })                               
        })
    })
    
})