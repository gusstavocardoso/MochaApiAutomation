var chai = require("chai");
var chaiHttp = require("chai-http");

chai.use(chaiHttp);

const request = chai.request("https://reqres.in")

const expect = chai.expect;

describe('POST Login Sucess', () => {

    context('Quando eu testo a API usando o método POST', () => {

        it('Deve fazer login com sucesso', (done) => {
            request
                .post('/api/register')
                .send({
                    "email": "eve.holt@reqres.in",
                    "password": "cityslicka"
                })
                .end((err, res) => {
                    expect(res).to.has.status(200);
                    expect(res.body.token).to.equal("QpwL5tke4Pnpja7X4")
                    console.log(res.body);
                    done();
                })                               
        })
    })
    
})